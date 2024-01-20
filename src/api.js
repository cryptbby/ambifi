const API_BASE_URL = 'https://api.deezer.com';

export const fetchPlaylists = async (searchQuery) => {
  try {
    const response = await fetch(`${API_BASE_URL}/search/playlist?q=${searchQuery}`);
    const data = await response.json();
    
    // Create a new array of unique playlists
    const uniquePlaylists = data.data.reduce((unique, playlist) => {
      return unique.some(item => item.title === playlist.title) ? unique : [...unique, playlist];
    }, []);

    return uniquePlaylists;
  } catch (error) {
    console.error('Error fetching playlists:', error);
    throw error;
  }
};

export const fetchPlaylistDetails = async (playlistId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/playlist/${playlistId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching playlist details:', error);
    throw error;
  }
};