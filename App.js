import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import RegionPage from './pages/RegionPage';
import EnglishBayPage from './pages/EnglishBayPage';
import FraserRiverPage from './pages/FraserRiverPage';
import StanleyParkPage from './pages/StanleyParkPage';
import BurnabyLakePage from './pages/BurnabyLakePage';
import CapilanoRiverPage from './pages/CapilanoRiverPage';
import BurrardInletPage from './pages/BurrardInletPage';
import SeymourRiverPage from './pages/SeymourRiverPage';
import FishPage from './pages/FishPage';
import SearchResults from './pages/SearchResults';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/profile" element={user ? <Profile user={user} /> : <Login setUser={setUser} />} />
        <Route path="/area/english-bay" element={<EnglishBayPage />} />
        <Route path="/area/fraser-river" element={<FraserRiverPage />} />
        <Route path="/area/stanley-park" element={<StanleyParkPage />} />
        <Route path="/area/burnaby-lake" element={<BurnabyLakePage />} />
        <Route path="/area/capilano-river" element={<CapilanoRiverPage />} />
        <Route path="/area/burrard-inlet" element={<BurrardInletPage />} />
        <Route path="/area/seymour-river" element={<SeymourRiverPage />} />
        <Route path="/region/:regionName" element={<RegionPage />} />
        <Route path="/fish/:fishId" element={<FishPage />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;


