import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader.component';
import CardContainer from '../components/CardContainer.component';

function HomePage() {
    const [loading, setLoading] = useState(false);
  
    return(
        <div className='home-page'>
            {loading ? <Loader /> : <CardContainer />}
        </div>
    )
}

export default HomePage;