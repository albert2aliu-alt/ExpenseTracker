const fs = require("fs");
const path = require("path");
const roots = [
  "node_modules/expo-router",
  "node_modules/expo",
  "node_modules/react-native",
  "node_modules/react-native-web",
  "node_modules/@react-native",
  "node_modules/react-native-gesture-handler",
  "node_modules/react-native-reanimated",
  "node_modules/react-native-safe-area-context",
  "node_modules/react-native-screens",
  "node_modules/react-native-svg",
];
const found = new Set();
function isSourceFile(file) {
  return file.endsWith(".js") || file.endsWith(".mjs") || file.endsWith(".ts");
}
function scanFile(file) {
  try {
    const txt = fs.readFileSync(file, "utf8");
    for (let i = 0; i < txt.length; i++) {
      if (txt[i] === "#") {
        const next = txt[i + 1] || "";
        if (/[_$A-Za-z]/.test(next)) {
          return true;
        }
      }
    }
  } catch {}
  return false;
}
function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === ".bin") continue;
      walk(p);
    } else if (isSourceFile(p)) {
      if (scanFile(p)) {
        found.add(p);
      }
    }
  }
}
roots.forEach((root) => walk(path.join(process.cwd(), root)));
for (const file of found) {
  console.log(file);
}
console.log("done", found.size);
