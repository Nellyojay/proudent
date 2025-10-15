import { Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage.jsx';
import './App.css';
import { ProfilePage } from './Pages/ProfilePage.jsx';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="profile" element={<ProfilePage />} />

    </Routes>
  );
}

export default App;
