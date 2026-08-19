const axios = require('axios');
const JELLYFIN_URL = process.env.JELLYFIN_URL || 'http://jellyfin:8096';
const API_KEY = process.env.JELLYFIN_API_KEY;

if (!API_KEY) {
  console.error('❌ JELLYFIN_API_KEY is not set in .env');
  process.exit(1);
}

const jellyfinClient = axios.create({
  baseURL: `${JELLYFIN_URL}`,
  headers: { 'X-Emby-Token': API_KEY },
});

exports.getLibraries = async () => {
  try {
    const res = await jellyfinClient.get('/Library/SelectableMediaFolders');
    return res.data.Items || [];
  } catch (err) {
    console.error('Failed to fetch libraries:', err.message);
    return [];
  }
};

exports.scanLibrary = async () => {
  try {
    await jellyfinClient.post('/Library/Refresh');
    console.log('Library scan triggered.');
  } catch (err) {
    console.error('Scan failed:', err.message);
  }
};

exports.searchMetadata = async (title) => {
  try {
    const res = await jellyfinClient.get('/Items', {
      params: { SearchTerm: title, Limit: 1 },
    });
    return res.data.Items[0] || null;
  } catch (err) {
    console.error('Metadata search failed:', err.message);
    return null;
  }
};

exports.updateLiveTvSources = async ({ m3uUrl, xmltvUrl }) => {
  try {
    const payload = {
      ProviderName: 'M3U',
      Type: 'M3U',
      M3UUrl: m3uUrl,
      XmlTvUrl: xmltvUrl || '',
    };
    await jellyfinClient.post('/LiveTv/Providers/M3U', payload);
    console.log('Live TV sources updated.');
  } catch (err) {
    console.error('Live TV update failed:', err.message);
    throw err;
  }
};

exports.getChannels = async () => {
  try {
    const res = await jellyfinClient.get('/LiveTv/Channels');
    return res.data.Items || [];
  } catch (err) {
    console.error('Failed to fetch channels:', err.message);
    return [];
  }
};
