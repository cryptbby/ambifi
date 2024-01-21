const API_BASE_URL = 'https://api.deezer.com';

export const fetchPlaylists = async (searchQuery) => {
  try {
    const response = await fetch(`${API_BASE_URL}/search/playlist?q=${searchQuery}`);
    const data = await response.json();
    console.log('data', data);
    return data.data;
  } catch (error) {
    console.error('Error fetching playlists:', error);
    throw error;
  }
};

export const fetchPlaylistDetails = async (playlistId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/playlist/${playlistId}`);
    const data = await response.json();
    console.log('data', data)
    return data;
  } catch (error) {
    console.error('Error fetching playlist details:', error);
    throw error;
  }
};
