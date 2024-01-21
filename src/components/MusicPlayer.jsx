import { Link } from 'react-router-dom';

const MusicPlayer = () => {
  const genres = [
    { genre: 'lofi', subGenres: ['cozy lofi', 'study lofi', 'sleep lofi'] },
    { genre: 'cozy', subGenres: ['cozy acoustic', 'cozy coffee', 'cozy hygge'] },
    { genre: 'games', subGenres: ['skyrim', 'animal crossing', 'god of war', 'mass effect', 'elden ring'] },
    { genre: 'noise', subGenres: ['white noise', 'pink noise', 'rain noise'] },
  ]; // Define your genres and sub-genres

  return (
    <div>
      <h1>Select a Genre</h1>
      {/* Map over the genres and create a header for each one */}
      {genres.map((genre) => (
        <div key={genre.genre}>
          <h1>{genre.genre}</h1>
          <div className="flex flex-wrap">
            {/* Map over the sub-genres and create a tile for each one */}
            {genre.subGenres.map((subGenre) => (
              <div key={subGenre} className="m-4 p-4 border-2 border-black rounded-xl">
                {/* The Link component navigates to a new page when clicked */}
                <Link to={`/playlists/${subGenre}`}>{subGenre}</Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MusicPlayer;