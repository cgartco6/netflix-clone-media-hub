import { useEffect, useState } from 'react';
import apiClient from '../services/apiClient';

export function useJellyfin() {
  const [libraries, setLibraries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiClient.get('/library/folders')
      .then((res) => {
        setLibraries(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch libraries:', err);
        setLoading(false);
      });
  }, []);

  return { libraries, loading };
}
