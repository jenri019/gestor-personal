import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    flag: true,
    data: [],
    currentPage: 1,
    totalPages: 1,
}

export const homeSlice = createSlice({
    name: 'home',
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
export const { setProps, reset } = homeSlice.actions;