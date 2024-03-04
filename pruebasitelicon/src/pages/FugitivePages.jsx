// FugitivesPage.jsx
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { FugitiveList } from '../components/FugitiveList'; // Ajusta la importación según la ubicación de tu componente

const FugitivePages = () => {
  return (
    <div className="FugitivePages">
      <NavBar />
      <FugitiveList />
      <Footer />
    </div>
  );
};

export default FugitivePages;