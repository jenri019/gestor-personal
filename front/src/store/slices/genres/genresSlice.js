import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    flag: true,
    data: []
}

export const genresSlice = createSlice({
    name: 'genres',
    initialState,
    reducers: {
        setProps: (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        },
        reset: (state) => {
            state = initialState;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setProps, reset } = genresSlice.actions;