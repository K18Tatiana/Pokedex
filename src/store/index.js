import { configureStore } from '@reduxjs/toolkit'
import nameSlice from './slices/name.slice'
import pokemonPageSlice from './slices/pokemonPage.slice'
import darkModeSlice from './slices/darkMode.slice'

export default configureStore({
  reducer: {
    name: nameSlice,
    pokemonPage: pokemonPageSlice,
    darkMode: darkModeSlice
	}
})