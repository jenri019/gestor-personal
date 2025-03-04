import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader.component';

function HomePage() {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Simula una carga de datos
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);
  
    if (loading) {
      return <Loader />;
    }
  
    return <h1>Home Page</h1>;
}

export default HomePage;