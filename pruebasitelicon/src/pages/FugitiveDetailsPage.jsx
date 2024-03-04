// FugitiveDetailsPage.jsx
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import FugitiveDetails from '../components/FugitiveDetails';

const FugitiveDetailsPage = () => {
  return (
    <div className="FugitiveDetailsPage">
         <NavBar />
      <FugitiveDetails />
      <Footer />
    </div>
  );
};

export default FugitiveDetailsPage;
