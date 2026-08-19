require('dotenv').config();
const app = require('./app');
const { startDriveScanner } = require('./services/driveScanner');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
  startDriveScanner();
});
