const fs = require("fs");
const path = require("path");

const root = __dirname;
const out = path.join(root, "dist");
const excluded = new Set([
  "dist", "node_modules", ".git", ".netlify",
  "package.json", "package-lock.json", "build.js",
  "netlify.toml", "README_DEPLOY_NETLIFY_BANGLA.txt"
]);

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

function copyTree(from, to) {
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    if (from === root && excluded.has(entry.name)) continue;
    const src = path.join(from, entry.name);
    const dest = path.join(to, entry.name);
    if (entry.isDirectory()) {
      fs.mkdirSync(dest, { recursive: true });
      copyTree(src, dest);
    } else if (entry.isFile()) {
      fs.copyFileSync(src, dest);
    }
  }
}

copyTree(root, out);

if (!fs.existsSync(path.join(out, "index.html"))) {
  throw new Error("Build failed: index.html was not copied to dist/");
}
console.log("Bentley Outdoors static site built successfully to dist/");
