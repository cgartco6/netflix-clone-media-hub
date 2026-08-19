const axios = require('axios');
const JELLYFIN_URL = process.env.JELLYFIN_URL;
const API_KEY = process.env.JELLYFIN_API_KEY;

const jellyfinClient = axios.create({
  baseURL: `${JELLYFIN_URL}`,
  headers: { 'X-Emby-Token': API_KEY },
});

// Get all libraries (media folders)
exports.getLibraries = async () => {
  const res = await jellyfinClient.get('/Library/SelectableMediaFolders');
  return res.data.Items;
};

// Trigger a library scan
exports.scanLibrary = async () => {
  await jellyfinClient.post('/Library/Refresh');
};

// Search for metadata
exports.searchMetadata = async (title) => {
  const res = await jellyfinClient.get('/Items', {
    params: { SearchTerm: title, Limit: 1 },
  });
  return res.data.Items[0] || null;
};

// Update Live TV sources (M3U + XMLTV)
exports.updateLiveTvSources = async ({ m3uUrl, xmltvUrl }) => {
  const payload = {
    ProviderName: 'M3U',
    Type: 'M3U',
    M3UUrl: m3uUrl,
    XmlTvUrl: xmltvUrl,
  };
  await jellyfinClient.post('/LiveTv/Providers/M3U', payload);
};

// Get current Live TV channels
exports.getChannels = async () => {
  const res = await jellyfinClient.get('/LiveTv/Channels');
  return res.data.Items;
};
