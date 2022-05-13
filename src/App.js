import React from 'react';
import './App.scss';
import HomePage from './pages/HomePage';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exect path='/' element={<HomePage />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}

export default App;
