import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokemonInfo from './pages/PokemonInfo'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Settings from './pages/Settings'

function App() {

  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route element={ <ProtectedRoutes /> }>
            <Route path='/config' element={ <Settings /> } />
            <Route path='/pokedex' element={ <Pokedex /> } />
            <Route path='/pokedex/:name' element={ <PokemonInfo /> } />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App