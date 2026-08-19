const fs = require('fs');
const { scanLibrary } = require('../api/jellyfin');

const MOUNT_PATHS = ['/media', '/mnt', '/Volumes'];

exports.startDriveScanner = () => {
  MOUNT_PATHS.forEach((path) => {
    if (fs.existsSync(path)) {
      fs.watch(path, (eventType, filename) => {
        if (eventType === 'rename') {
          console.log(`🔍 Detected drive change: ${filename}`);
          scanLibrary().catch(console.error);
        }
      });
    }
  });
  console.log('👀 Watching for external drives...');
};
