Bentley Outdoors — Netlify deployment fix

This package includes build.js, package.json, and netlify.toml.
The build command copies the static website into dist/ and Netlify publishes dist/.

IMPORTANT: Replace the files in the ROOT of your GitHub repository with the contents of this ZIP (extract first; do not upload the ZIP itself). Commit the changes.
Then in Netlify, open Site configuration / Build settings and make sure:
  Build command: npm run build
  Publish directory: dist
If the UI shows .dist (dot before dist), change it to dist (no leading dot), or rely on the included netlify.toml after committing it.
Trigger a new deploy after committing.
