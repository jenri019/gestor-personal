import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader.component';
import CardContainer from '../components/CardContainer.component';

import * as HomeActions from '../store/slices/home/homeSlice';
import * as GenresActions from '../store/slices/genres/genresSlice';

import dataService from '../services/data.service';
import genresService from '../services/genres.service';
import Filter from '../components/Filter.component';
import Popup from '../components/Popup.component';

function HomePage() {
    const [loadingHome, setLoadingHome] = useState(true);
    const [loadingGenres, setLoadingGenres] = useState(true);
    const [showPopup, setShowPopup] = useState(false);

    const dispatch = useDispatch();

    const { flag: flagHome, data: dataHome = [], filters, currentPage, page_size } = useSelector((state) => state.home);
    const { flag: flagGenres, data: dataGenres = [] } = useSelector((state) => state.genres);

    const getDataHome = async () => {
        setLoadingHome(true);
        try {
            const body =  { filters, page: currentPage, page_size };
            const result = await dataService.getAll(body);
            dispatch(HomeActions.setProps({ data: result.data, totalPages: result.total_pages, flag: false }));
        } catch (error) {
            dispatch(HomeActions.setProps({ flag: false }));
        }
    };

    const getDataGenres = async () => {
        setLoadingGenres(true);
        try {
            const result = await genresService.getGenres();
            dispatch(GenresActions.setProps({ data: result, flag: false }));
        } catch (error) {
            dispatch(GenresActions.setProps({ flag: false }));
        }
    };
    
    const handleShowPopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    useEffect(() => {
        if (flagHome) getDataHome();
        else setLoadingHome(false);

    }, [flagHome]);

    useEffect(() => {
        if (flagGenres) getDataGenres();
        else setLoadingGenres(false);

    }, [flagGenres]);

    return (
        <div className='home-page'>
            <div className='home-page-header'>
                <Filter />
                <button id='btn-add' onClick={handleShowPopup}>Agregar</button>
                <Popup show={showPopup} onClose={handleClosePopup}>
                    <h2>Contenido del Popup</h2>
                    <p>Este es el contenido del popup.</p>
                </Popup>
            </div>
            {loadingHome || loadingGenres ? <Loader /> : <CardContainer items={dataHome} />}
        </div>
    );
}

export default HomePage;