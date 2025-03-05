import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader.component';
import CardContainer from '../components/CardContainer.component';
import dataService from '../services/data.service';

function HomePage() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const result = await dataService.getAll();
            setData(result);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='home-page'>
            {loading ? <Loader /> : <CardContainer items={data.data} />}
        </div>
    );
}

export default HomePage;