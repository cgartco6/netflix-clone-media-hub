const router = require('express').Router();
const { updateLiveTvSources, getChannels } = require('../api/jellyfin');

// Add or update M3U/XMLTV sources
router.post('/sources', async (req, res) => {
  const { m3uUrl, xmltvUrl } = req.body;
  if (!m3uUrl) return res.status(400).json({ error: 'M3U URL required' });
  
  await updateLiveTvSources({ m3uUrl, xmltvUrl: xmltvUrl || '' });
  res.json({ success: true, message: 'TV sources updated' });
});

// Get list of channels
router.get('/channels', async (req, res) => {
  const channels = await getChannels();
  res.json(channels);
});

module.exports = router;
