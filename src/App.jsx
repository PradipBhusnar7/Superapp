import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Genre from './pages/Genre';
import Browse from './pages/Browse';
// import Browse from './components/Browse/browse'

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/another" element={<Genre />} />
    <Route path="/next" element={<Browse/>} />
  </Routes>
  );
}

export default App;
