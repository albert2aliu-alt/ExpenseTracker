const fs = require("fs");
const path = require("path");
const root = path.join(process.cwd(), "node_modules");
const regex = /this\.#/;
let found = 0;
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === ".bin") continue;
      walk(p);
      if (found >= 50) return;
    } else if (p.endsWith(".js")) {
      try {
        const txt = fs.readFileSync(p, "utf8");
        if (regex.test(txt)) {
          console.log(p);
          found++;
          if (found >= 50) return;
        }
      } catch {}
    }
  }
}
walk(root);
console.log("done", found);
