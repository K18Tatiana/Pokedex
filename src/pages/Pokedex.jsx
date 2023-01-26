import '../assets/styles/Pokedex.css'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useState, useEffect } from 'react'
import PokemonCard from '../components/PokemonCard'
import { useNavigate } from 'react-router-dom'

const Pokedex = () => {

    const nameInfo = useSelector( state => state.name )
    const pokemonsPerPage = useSelector( state => state.pokemonPage )
    const darkMode = useSelector( state => state.darkMode )

    const [ pokemons, setPokemons ] = useState( [] )
    const [ pokemonsType, setPokemonsType ] = useState( [] )
    const [ pokemonSearch, setPokemonSearch ] = useState( '' )

    const navigate = useNavigate()

    useEffect( () => {
        axios
        .get( "https://pokeapi.co/api/v2/type/" )
        .then( resp => setPokemonsType(resp.data.results) )
        .catch( error => console.error(error) )

        axios
        .get( "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1279" )
        .then( resp => setPokemons( resp?.data?.results ) )
        .catch( error => console.error(error) )
    }, [] )

    const selectedType = (e) => {
        const url = e.target.value

        if( url === "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1279" ) {
            axios
            .get( url )
            .then( resp => {
                setPokemons(resp?.data?.results)
                setPage(1)
            } )
            .catch( error => console.error(error) )
        } else {
            axios
            .get( url )
            .then( resp => {
                setPokemons(resp.data.pokemon)
                setPage(1)
            } )
            .catch( error => console.error(error) )
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target[0].value.toLowerCase()
        
        axios
        .get( `https://pokeapi.co/api/v2/pokemon/${name}` )
        .then( () => navigate(`/pokedex/${name}`) )
        .catch( () => {
            setPokemonSearch('The typed pokemon does not exist, try again!')
            setTimeout(() => {
                setPokemonSearch('')
            }, 2500);
        } )
    }

    const [ page, setPage ] = useState(1)
    const lastIndex = page * pokemonsPerPage
    const firstIndex = lastIndex - pokemonsPerPage

    const pokemonsPaginated = pokemons?.slice( firstIndex, lastIndex )

    const totalPages = Math.ceil(pokemons.length / pokemonsPerPage)

    const pagesNumbers = []

    for(let i = 1; i <= totalPages; i++ ) {
        pagesNumbers.push(i)
    }

    const pagesNumberPaginated = page <= 4 ? pagesNumbers?.slice(0, 7) : pagesNumbers?.slice(page - 4, page + 3)
    const colorButton = { backgroundColor: 'rgb(236, 85, 71)', color: '#fff' }

    return (
        <div className="pokedex">
            <button onClick={ () => navigate(`/config`) }>
                <i className='bx bxs-cog' style={ darkMode ? {} : { color: '#fff' } }></i>
            </button>
            <div>
                <h2 className={ darkMode ? 'h2-dark' : '' }><span style={ darkMode ? { color: 'lightcoral'} : {} }>Welcome { nameInfo }!</span> Here you can find your favorite pokemon</h2>
                <div className='search-pokemon'>
                    <form onSubmit={ (e) => handleSubmit(e) }>
                        <input 
                        type="text" placeholder='Look for a pokemon...' 
                        className={ darkMode ? 'input-dark' : '' } 
                        />
                        <button type='submit' className={ darkMode ? 'btn-submit-dark' : '' }>Search</button>
                    </form>
                    <select name="" id="" onChange={selectedType} className={ darkMode ? 'select-dark' : '' } >
                        <option value="https://pokeapi.co/api/v2/pokemon?offset=0&limit=1279">
                            All pokemon    
                        </option>
                        {
                            pokemonsType?.map( pokemonType => {
                                const name = pokemonType.name
                                const letter = name[0]
                                return (
                                    <option value={pokemonType.url} key={pokemonType.name}>
                                        {name.replace(letter, letter.toUpperCase())}
                                    </option>
                                )
                            } )
                        }
                    </select>
                </div>
                { 
                    <h2 className='pokemon-error'>{pokemonSearch}</h2>
                }
                {
                    pokemonsPaginated?.length !== 0
                    ?
                    <div>
                        <ul>
                            {
                                pokemonsPaginated?.map( (item, index) => (
                                    <PokemonCard 
                                    key={index} 
                                    url={item.pokemon ? item.pokemon.url : item.url}
                                    />
                                ) )
                            }
                        </ul>
                        <div className='buttons'>
                            <button disabled={ page === 1 } onClick={ () => setPage(page - 1) }>
                                <i className='bx bx-chevrons-left'></i>
                            </button>
                            { 
                                pagesNumberPaginated.map( num => (
                                    <button 
                                    key={num} 
                                    onClick={ () => setPage(num) } 
                                    style={ num === page ? colorButton : {} }
                                    >
                                        {num}
                                    </button>
                                ) ) 
                            }
                            <button disabled={ page === totalPages } onClick={ () => setPage(page + 1) }>
                                <i className='bx bx-chevrons-right'></i>
                            </button>
                        </div>
                    </div>
                    :
                    <div className='no-pokemon' style={ darkMode ? { color: 'rgba(255, 255, 255, 0.8)' } : {} }>
                        <h2>There are no pokemon of this type</h2>
                        <img src="/mapa.png" alt="" />
                    </div>
                }
            </div>
        </div>
    )
}

export default Pokedex