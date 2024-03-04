// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FugitivePages from './pages/FugitivePages';
import FugitiveDetailsPage from './pages/FugitiveDetailsPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FugitivePages />} />
        <Route path="/fugitives/:id" element={<FugitiveDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

