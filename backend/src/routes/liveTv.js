const router = require('express').Router();
const { updateLiveTvSources, getChannels } = require('../api/jellyfin');

router.post('/sources', async (req, res) => {
  const { m3uUrl, xmltvUrl } = req.body;
  if (!m3uUrl) return res.status(400).json({ error: 'M3U URL required' });

  try {
    await updateLiveTvSources({ m3uUrl, xmltvUrl });
    res.json({ success: true, message: 'TV sources updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/channels', async (req, res) => {
  try {
    const channels = await getChannels();
    res.json(channels);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
