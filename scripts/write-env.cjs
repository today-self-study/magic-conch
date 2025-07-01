const { execSync } = require('child_process');
const { version } = require('../package.json');
const gitHash = execSync('git rev-parse --short HEAD').toString().trim();
require('fs').writeFileSync(
  '.env',
  `VITE_APP_VERSION=${version}\nVITE_APP_GIT_HASH=${gitHash}\n`
); 