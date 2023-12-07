import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Genre from './pages/Genre';
import Browse from './pages/Browse';
// import Movies from "./pages/Movies";

// import Browse from './components/Browse/browse'

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/another" element={<Genre />} />
    <Route path="/next" element={<Browse/>} />
    {/* <Route path="/movies" element={<Movies />} /> */}
  </Routes>
  );
}

export default App;
