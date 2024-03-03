import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';



import { FugitiveList } from '../components/FugitiveList';
function FugitivesPage() {
    return (
      <div className="FugitivesPage">
        <NavBar />
      
    
        <FugitiveList/>
   
        <Footer />
      </div>
    );
  }
  
  export default FugitivesPage;