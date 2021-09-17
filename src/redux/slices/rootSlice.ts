import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'Batman',
        alias: "Bruce Wayne",
        powers: "High intelligence, martial arts, tech",
        comics_appeared_in: '700',
        base_of_operations: 'Gotham City',
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseAlias: (state, action) => { state.alias = action.payload},
        choosePowers: (state, action) => { state.powers = action.payload},
        chooseComics: (state, action) => { state.comics_appeared_in = action.payload},
        chooseBase: (state, action) => { state.base_of_operations = action.payload},
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseName, chooseAlias, choosePowers, chooseComics, chooseBase} = rootSlice.actions;