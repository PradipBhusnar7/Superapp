import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Genre from './pages/Genre';
import Browse from './pages/Browse';
import Movie from './pages/Movie';


function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/another" element={<Genre />} />
    <Route path="/next" element={<Browse/>} />
    <Route path="/movie" element={<Movie/>} />
  </Routes>
  );
}

export default App;
