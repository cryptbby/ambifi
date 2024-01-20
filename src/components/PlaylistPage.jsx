import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPlaylists } from '../api';

const PlaylistPage = () => {
  const { genre } = useParams();
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchPlaylistsData = async () => {
      try {
        const playlistsData = await fetchPlaylists(genre);
        console.log(playlistsData);
        setPlaylists(playlistsData);
      } catch (error) {
        console.error('Error fetching playlists:', error);
      }
    };
  
    fetchPlaylistsData();
  }, [genre]);

  return (
    <div>
      <h1>Playlists for {genre}</h1>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id}>
            <Link to={`/playlist/${playlist.id}`}><h2>{playlist.title}</h2></Link>
            <p>Author: {playlist.user.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistPage;