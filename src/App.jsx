import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MusicPlayer from './components/MusicPlayer';
import PlaylistPage from './components/PlaylistPage';
import PlaylistDetail from './components/PlaylistDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/playlists/:genre" element={<PlaylistPage />} />
        <Route path="/" element={<MusicPlayer />} />
        <Route path="/playlist/:id" element={<PlaylistDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
