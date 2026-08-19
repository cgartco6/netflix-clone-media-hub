const router = require('express').Router();
const { getLibraries, scanLibrary, searchMetadata } = require('../api/jellyfin');
const { generateDescription, generatePoster } = require('../services/aiMetadata');

router.get('/folders', async (req, res) => {
  const folders = await getLibraries();
  res.json(folders);
});

router.post('/scan', async (req, res) => {
  await scanLibrary();
  res.json({ success: true });
});

router.get('/metadata', async (req, res) => {
  const { title } = req.query;
  if (!title) return res.status(400).json({ error: 'Missing title' });

  // Try Jellyfin's built‑in metadata first
  let item = await searchMetadata(title);
  if (item) {
    return res.json(item);
  }

  // Fallback to AI
  const description = await generateDescription(title);
  const poster = await generatePoster(title);
  res.json({
    Name: title,
    Overview: description,
    ImageUrl: poster,
  });
});

module.exports = router;
