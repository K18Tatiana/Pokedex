import { createSlice } from '@reduxjs/toolkit';

export const pokemonPageSlice = createSlice({
    name: 'pokemonPage',
    initialState: 16,
    reducers: {
        changePokemonPage: (state, action) => {
            return action.payload
        }
    }
})

export const { changePokemonPage } = pokemonPageSlice.actions;

export default pokemonPageSlice.reducer;