import { createSlice } from '@reduxjs/toolkit';

export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: false,
    reducers: {
        isDarkMode: (state, action) => {
            return action.payload
        }
    }
})

export const { isDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;