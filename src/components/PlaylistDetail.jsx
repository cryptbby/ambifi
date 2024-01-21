// src/components/PlaylistPage.js
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPlaylistDetails } from '../api';

const PlaylistPage = () => {
  const { id } = useParams();
  const [playlistDetails, setPlaylistDetails] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const fetchPlaylistDetailsData = async () => {
      try {
        const detailsData = await fetchPlaylistDetails(id);
        setPlaylistDetails(detailsData);
        // Set the first track as the initial current track
        setCurrentTrack(detailsData.tracks.data[0]);
      } catch (error) {
        console.error('Error fetching playlist details:', error);
      }
    };

    if (id) {
      fetchPlaylistDetailsData();
    }
  }, [id]);

  const playTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const stopTrack = () => {
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  useEffect(() => {
    if (isPlaying && currentTrack) {
      if (audioRef.current) {
        audioRef.current.src = currentTrack.preview; // Assuming Deezer provides a preview URL
        audioRef.current.play();
      }
    }
  }, [isPlaying, currentTrack]);

  return (
    <div>
      {playlistDetails ? (
        <div>
          <h1>{playlistDetails.title}</h1>
          <ul>
            {playlistDetails.tracks.data.map((track) => (
              <li key={track.id}>
                <h2>{track.title} - {track.artist.name}</h2>
                <h3>{track.duration}</h3>
                <button onClick={() => playTrack(track)}> Play</button>
              </li>
            ))}
          </ul>
          {currentTrack && (
            <div>
              <p>Currently Playing: {currentTrack.title}</p>
              <button onClick={stopTrack}>Stop</button>
              <audio ref={audioRef}></audio>
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PlaylistPage;
