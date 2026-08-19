const fs = require('fs');
const { scanLibrary } = require('../api/jellyfin');

const MOUNT_PATHS = ['/media', '/mnt', '/Volumes'];

exports.startDriveScanner = () => {
  MOUNT_PATHS.forEach((path) => {
    if (fs.existsSync(path)) {
      try {
        fs.watch(path, (eventType, filename) => {
          if (eventType === 'rename') {
            console.log(`🔍 Detected drive change: ${filename}`);
            scanLibrary().catch(console.error);
          }
        });
        console.log(`👀 Watching ${path} for external drives...`);
      } catch (err) {
        console.error(`Cannot watch ${path}:`, err.message);
      }
    } else {
      console.log(`Path ${path} does not exist.`);
    }
  });
};
