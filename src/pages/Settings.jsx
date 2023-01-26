import { useNavigate } from "react-router-dom"
import '../assets/styles/Settings.css'
import { useSelector, useDispatch } from "react-redux"
import { changePokemonPage } from "../store/slices/pokemonPage.slice"
import { isDarkMode } from "../store/slices/darkMode.slice"

const Settings = () => {

    const navigate = useNavigate()
    const pokemonPerPage = useSelector( state => state.pokemonPage )
    const darkMode = useSelector( state => state.darkMode )
    const pokemonPages = [4, 8, 12, 16, 20]
    const dispatch = useDispatch()
    document.body.style.backgroundColor = darkMode ? 'rgba(0, 0, 0, 0.75)' : 'rgba(255, 255, 255, 0.726)'

    return (
        <div className={ darkMode ? 'settings settings-dark' : 'settings' }>
            <button className="btn-return" onClick={ () => navigate(-1) }>
                <i className='bx bx-chevron-left'></i>
            </button>
            <h1>Settings<i className='bx bxs-cog'></i></h1>
            <div className={ darkMode ? 'background-dark background' : 'background' } >
                <div className="pokemon-page">
                    <h2>Number of pokemons per page</h2>
                    <div>
                        {
                            pokemonPages.map( (page, index) => (
                                <button 
                                style={ pokemonPerPage === page ? { backgroundColor: 'rgba(0, 0, 0, 0.5)' } : {} } 
                                className={ darkMode ? 'btn-page btn-page-dark' : 'btn-page' } 
                                key={index}
                                onClick={ () => dispatch( changePokemonPage(page) ) }
                                >
                                    {page}
                                </button>
                            ) )
                        }
                    </div>
                </div>
                <div className="dark-mode">
                    <h2>Dark mode</h2>
                    {
                        darkMode
                        ?
                        <i 
                        className='bx bxs-toggle-right' 
                        onClick={ () => dispatch( isDarkMode(!darkMode) ) } 
                        style={ {color: 'rgba(160, 160, 160, 0.7)'} }
                        >
                        </i>
                        :
                        <i className='bx bxs-toggle-left' onClick={ () => dispatch( isDarkMode(!darkMode) ) } ></i>
                    }
                </div>
            </div>
        </div>
    )
}

export default Settings