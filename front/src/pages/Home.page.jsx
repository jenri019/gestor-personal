import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader.component';
import CardContainer from '../components/CardContainer.component';
import dataService from '../services/data.service';
import { setProps } from '../store/slices/home/homeSlice';

function HomePage() {
    const [loading, setLoading] = useState(true);
    const { flag, data = [] } = useSelector((state) => state.home);
    const dispatch = useDispatch();

    const getData = async () => {
        console.log('Obteniendo datos...');
        try {
            const result = await dataService.getAll();
            dispatch(setProps({ data: result.data, totalPages: result.total_pages, flag: false }));
        } catch (error) {
            console.error(error);
            dispatch(setProps({ flag: false }));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if(flag) getData();
        else setLoading(false);
    }, [flag]);

    return (
        <div className='home-page'>
            {loading ? <Loader /> : <CardContainer items={data} />}
        </div>
    );
}

export default HomePage;