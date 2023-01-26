import { useState, useEffect } from 'react'
import axios from 'axios'
import '../assets/styles/PokemonCard.css'
import { useNavigate } from 'react-router-dom'
import useGetColor from '../hooks/useGetColor'
import { useSelector } from 'react-redux'

const PokemonCard = ( {url} ) => {

    const [ pokemon, setPokemon ] = useState( {} )
    const { getColor, color } = useGetColor()

    const darkMode = useSelector( state => state.darkMode )

    const navigate = useNavigate()

    useEffect( () => {
        axios
        .get( url )
        .then( resp => setPokemon(resp.data) )
        .catch( error => console.error(error) )
    }, [url] )

    useEffect( () => {
        getColor(pokemon?.types?.[0]?.type?.name, pokemon?.types?.[0]?.type?.name)
    }, [pokemon?.types?.[0]?.type?.name] )

    const name = pokemon?.name
    const letter = name?.charAt(0)
    const pokemonsType = pokemon?.types?.map( pokemon => {
        const type = pokemon?.type?.name
        const letter = type?.charAt(0)
        return pokemon?.type?.name?.replace(letter, letter.toUpperCase())
    } )

    return (
        <li 
        className="pokemon-card" 
        style={ darkMode ? {borderColor: color.color1, background: color.color5} : {borderColor: color.color1, background: color.color2} }
        onClick={ () => navigate(`/pokedex/${name}`) }
        >
            {
                pokemon?.sprites?.other?.dream_world?.front_default !== null || pokemon?.sprites?.other?.['official-artwork']?.front_default !== null
                ?
                    pokemon?.sprites?.other?.dream_world?.front_default !== null
                    ?
                    <img src={pokemon?.sprites?.other?.dream_world?.front_default} alt="" />
                    :
                    <img src={pokemon?.sprites?.other?.['official-artwork']?.front_default} alt="" />
                :
                <img src="/huevo.png" alt="" />
            }
            <div>
                <div>
                    <h3 style={ {color: color.color1} }>{name?.replace(letter, letter.toUpperCase())}</h3>
                    <span>Type</span>
                    {
                        pokemonsType?.length > 1
                        ?
                        <h4 style={ darkMode ? { color: '#fff' } : {} } >{pokemonsType?.[0]} / {pokemonsType?.[1]}</h4>
                        :
                        <h4 style={ darkMode ? { color: '#fff' } : {} } >{pokemonsType?.[0]}</h4>
                    }
                </div>
                <div>
                    <div>
                        <span>HP</span>
                        <h5 style={ {color: color.color1} }>{pokemon?.stats?.[0]?.base_stat}</h5>
                        <span>DEFENSE</span>
                        <h5 style={ {color: color.color1} }>{pokemon?.stats?.[2]?.base_stat}</h5>
                    </div>
                    <div>
                        <span>ATTACK</span>
                        <h5 style={ {color: color.color1} }>{pokemon?.stats?.[1]?.base_stat}</h5>
                        <span>SPEED</span>
                        <h5 style={ {color: color.color1} }>{pokemon?.stats?.[5]?.base_stat}</h5>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default PokemonCard