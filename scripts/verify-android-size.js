const fs = require('fs');
const path = require('path');

const MAX_RELEASE_ARTIFACT_BYTES = 80 * 1024 * 1024;
const candidates = [
  'android/app/build/outputs/bundle/release/app-release.aab',
  'android/app/build/outputs/apk/release/app-release.apk',
];

const artifacts = candidates
  .map((relativePath) => {
    const absolutePath = path.join(process.cwd(), relativePath);
    return fs.existsSync(absolutePath)
      ? { relativePath, bytes: fs.statSync(absolutePath).size }
      : null;
  })
  .filter(Boolean);

if (artifacts.length === 0) {
  console.error('No Android release artifact found. Run npm run android:bundle first.');
  process.exit(1);
}

for (const artifact of artifacts) {
  const sizeMb = artifact.bytes / 1024 / 1024;
  console.log(`${artifact.relativePath}: ${sizeMb.toFixed(1)} MB`);
  if (artifact.bytes > MAX_RELEASE_ARTIFACT_BYTES) {
    console.error('Release artifact exceeds the 80 MB size target.');
    process.exitCode = 1;
  }
}
