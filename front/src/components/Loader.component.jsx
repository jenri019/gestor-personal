import React from 'react';
import '../styles/Loader.css';

function HomePage() {
    return (
        <div className="loader">
            <div className="spinner"></div>
            <p>Cargando...</p>
        </div>
    );
}

export default HomePage;