import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as HomeActions from '../store/slices/home/homeSlice';

const Filter = () => {
    const [genre, setGenre] = useState('');

    const { data = [] } = useSelector((state) => state.genres);
    const { filters } = useSelector((state) => state.home);
    const dispatch = useDispatch();

    const onSelectGenre = (genre) => {
        setGenre(genre);
        const newFilters = { ...filters, generos: [genre] };
        dispatch(HomeActions.setProps({ filters: newFilters, flag: true }));
    }

    return (
        <div>
            <select name="" id="" value={genre} onChange={(e) => onSelectGenre(e.target.value)}>
            <   option value={''}>Todos</option>
                {
                    data.map((item) => (
                        <option key={item.id} value={item.title}>{item.title}</option>
                    ))
                }
            </select>
            <pre>{'El genero es '+genre}</pre>
        </div>
    )
}

export default Filter