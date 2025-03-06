import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as HomeActions from '../store/slices/home/homeSlice';
import '../styles/Filter.css';

const Filter = ({ allowMultiple = true }) => {
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const { data = [] } = useSelector((state) => state.genres);
    const { filters } = useSelector((state) => state.home);
    const dispatch = useDispatch();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const onSelectGenre = (genre) => {
        let newSelectedGenres;
        if (allowMultiple) {
            if (selectedGenres.includes(genre)) {
                newSelectedGenres = selectedGenres.filter(g => g !== genre);
            } else {
                newSelectedGenres = [...selectedGenres, genre];
            }
        } else {
            newSelectedGenres = selectedGenres.includes(genre) ? [] : [genre];
        }
        setSelectedGenres(newSelectedGenres);
    };

    const onApply = () => {
        dispatch(HomeActions.setProps({ filters: { ...filters, generos: selectedGenres }, flag: true }));
        setIsDropdownOpen(false);
    }

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        setSelectedGenres(filters.generos || []);
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const capitalize = (str) => {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    return (
        <div className="filter" ref={dropdownRef}>
            <div className="selected-genres" onClick={toggleDropdown}>
                {selectedGenres.length > 0 ? (
                    <div className="selected-genres-text">
                        {capitalize(selectedGenres.join(', '))}
                    </div>
                ) : (
                    'Selecciona géneros'
                )}
            </div>
            {isDropdownOpen && (
                <div className="dropdown">
                    <div className='btn-filter-container'>
                        <button type="button" className='btn btn-primary btn-filter' onClick={ onApply }>Aplicar</button>
                    </div>
                    <div className="dropdown-item-container"> 
                        {data.map((item) => (
                            <div
                                key={item.id}
                                className={`dropdown-item ${selectedGenres.includes(item.title) ? 'selected' : ''}`}
                                onClick={() => onSelectGenre(item.title)}
                            >
                                {capitalize(item.title)}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Filter