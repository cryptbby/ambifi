import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPlaylistDetails } from '../api';

const PlaylistDetail = () => {
  const { id } = useParams();
  const [playlistDetails, setPlaylistDetails] = useState(null);

  useEffect(() => {
    const fetchPlaylistDetailsData = async () => {
      try {
        const detailsData = await fetchPlaylistDetails(id);
        setPlaylistDetails(detailsData);
      } catch (error) {
        console.error('Error fetching playlist details:', error);
      }
    };

    if (id) {
      fetchPlaylistDetailsData();
    }
  }, [id]);

  return (
    <div>
      {playlistDetails ? (
        <div>
          <h1>{playlistDetails.title}</h1>
          <ul>
            {playlistDetails.tracks.data.map((track) => (
              <li key={track.id}>
                {track.title} - {track.artist.name}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PlaylistDetail;
