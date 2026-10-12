/**
 * On-device expense categorization (rules + learned exemplars).
 * Transaction text never leaves the device. ONNX/TFLite embeddings can plug into
 * `scoreWithEmbeddings` later behind a custom dev client — not required for Expo Go.
 */
import { CATEGORIES } from "@/utils/categories";
import AsyncStorage from "@react-native-async-storage/async-storage";

const EXEMPLARS_KEY = "@extrack_category_exemplars_v1";
const AUTO_APPLY_THRESHOLD = 0.72;

export type CategorySuggestion = {
  categoryKey: string;
  confidence: number;
  source: "rule" | "exemplar" | "fallback";
  label: string;
};

type Exemplar = { text: string; categoryKey: string; count: number };

const RULES: { categoryKey: string; patterns: RegExp[] }[] = [
  {
    categoryKey: "food",
    patterns: [
      /uber\s*eats|doordash|grubhub|mcdonald|starbucks|cafe|restaurant|grocery|supermarket|whole\s*foods|trader\s*joe|pizza|sushi|bakery|coffee/i,
    ],
  },
  {
    categoryKey: "transport",
    patterns: [
      /uber(?!\s*eats)|lyft|shell|bp\b|exxon|gas\b|fuel|parking|metro|transit|train|airline|taxi|toll/i,
    ],
  },
  {
    categoryKey: "bills",
    patterns: [
      /electric|water\b|internet|verizon|at&t|comcast|utility|rent|mortgage|insurance|phone\s*bill|wifi/i,
    ],
  },
  {
    categoryKey: "shopping",
    patterns: [
      /amazon|walmart|target|ikea|ebay|etsy|mall|clothing|nike|zara|best\s*buy/i,
    ],
  },
  {
    categoryKey: "health",
    patterns: [
      /pharmacy|cvs|walgreens|hospital|clinic|doctor|dental|medical|health/i,
    ],
  },
  {
    categoryKey: "entertainment",
    patterns: [
      /netflix|spotify|hulu|disney|cinema|movie|steam|playstation|xbox|concert|ticket/i,
    ],
  },
  {
    categoryKey: "education",
    patterns: [
      /tuition|udemy|coursera|school|university|bookstore|textbook|course/i,
    ],
  },
  {
    categoryKey: "travel",
    patterns: [
      /hotel|airbnb|booking\.com|expedia|flight|airport|hostel|vacation/i,
    ],
  },
  {
    categoryKey: "fitness",
    patterns: [/gym|fitness|peloton|yoga|crossfit|sport|athletic/i],
  },
];

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenSet(text: string): Set<string> {
  return new Set(
    normalize(text)
      .split(" ")
      .filter((t) => t.length > 2),
  );
}

function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 || b.size === 0) return 0;
  let inter = 0;
  for (const t of a) if (b.has(t)) inter += 1;
  return inter / (a.size + b.size - inter);
}

async function loadExemplars(): Promise<Exemplar[]> {
  try {
    const raw = await AsyncStorage.getItem(EXEMPLARS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (e): e is Exemplar =>
        typeof e === "object" &&
        e !== null &&
        typeof (e as Exemplar).text === "string" &&
        typeof (e as Exemplar).categoryKey === "string",
    );
  } catch {
    return [];
  }
}

async function saveExemplars(exemplars: Exemplar[]): Promise<void> {
  await AsyncStorage.setItem(
    EXEMPLARS_KEY,
    JSON.stringify(exemplars.slice(0, 500)),
  );
}

function scoreRules(haystack: string): CategorySuggestion | null {
  let best: CategorySuggestion | null = null;
  for (const rule of RULES) {
    for (const pattern of rule.patterns) {
      if (pattern.test(haystack)) {
        const confidence = 0.85;
        if (!best || confidence > best.confidence) {
          const cat = CATEGORIES.find((c) => c.key === rule.categoryKey);
          best = {
            categoryKey: rule.categoryKey,
            confidence,
            source: "rule",
            label: cat?.label ?? rule.categoryKey,
          };
        }
      }
    }
  }
  return best;
}

function scoreExemplars(
  haystack: string,
  exemplars: Exemplar[],
): CategorySuggestion | null {
  const tokens = tokenSet(haystack);
  const scores = new Map<string, number>();

  for (const ex of exemplars) {
    const sim = jaccard(tokens, tokenSet(ex.text));
    if (sim <= 0) continue;
    const weight = sim * (1 + Math.min(ex.count, 5) * 0.05);
    scores.set(ex.categoryKey, (scores.get(ex.categoryKey) ?? 0) + weight);
  }

  let bestKey = "";
  let bestScore = 0;
  for (const [key, score] of scores) {
    if (score > bestScore) {
      bestKey = key;
      bestScore = score;
    }
  }
  if (!bestKey || bestScore < 0.25) return null;

  const cat = CATEGORIES.find((c) => c.key === bestKey);
  return {
    categoryKey: bestKey,
    confidence: Math.min(0.95, 0.55 + bestScore * 0.4),
    source: "exemplar",
    label: cat?.label ?? bestKey,
  };
}

/** Suggest a category from title + optional note. Fully on-device. */
export async function suggestCategory(
  title: string,
  note?: string,
): Promise<CategorySuggestion> {
  const haystack = `${title} ${note ?? ""}`.trim();
  if (!haystack) {
    return {
      categoryKey: "other",
      confidence: 0,
      source: "fallback",
      label: "Other",
    };
  }

  const ruleHit = scoreRules(haystack);
  const exemplars = await loadExemplars();
  const exemplarHit = scoreExemplars(haystack, exemplars);

  const candidates = [ruleHit, exemplarHit].filter(
    Boolean,
  ) as CategorySuggestion[];
  if (candidates.length === 0) {
    return {
      categoryKey: "other",
      confidence: 0.2,
      source: "fallback",
      label: "Other",
    };
  }

  candidates.sort((a, b) => b.confidence - a.confidence);
  return candidates[0];
}

export function shouldAutoApply(suggestion: CategorySuggestion): boolean {
  return (
    suggestion.confidence >= AUTO_APPLY_THRESHOLD &&
    suggestion.source !== "fallback"
  );
}

/** Learn from a user correction so future suggestions improve locally. */
export async function recordCategoryCorrection(
  title: string,
  note: string | undefined,
  categoryKey: string,
): Promise<void> {
  const text = normalize(`${title} ${note ?? ""}`);
  if (!text || text.length < 2) return;

  const exemplars = await loadExemplars();
  const existing = exemplars.find(
    (e) => e.text === text && e.categoryKey === categoryKey,
  );
  if (existing) {
    existing.count += 1;
  } else {
    exemplars.unshift({ text, categoryKey, count: 1 });
  }
  await saveExemplars(exemplars);
}
