import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios'
import useGetColor from "../hooks/useGetColor"
import '../assets/styles/PokemonInfo.css'
import { useSelector } from "react-redux"

const PokemonInfo = () => {

    const { name } = useParams()
    const [ pokemon, setPokemon ] = useState( {} )
    const { getColor, color } = useGetColor()

    const darkMode = useSelector( state => state.darkMode )

    const navigate = useNavigate()

    useEffect( () => {
        axios
        .get( `https://pokeapi.co/api/v2/pokemon/${name}` )
        .then( resp => setPokemon(resp.data) )
        .catch( error => console.error(error) )
    }, [name] )

    useEffect( () => {
        getColor(pokemon?.types?.[0]?.type?.name, pokemon?.types?.[1]?.type?.name)
    }, [pokemon?.types?.[0]?.type?.name] )

    const namePokemon = pokemon?.name
    const letter = name?.charAt(0)
    const pokemonType = pokemon?.types?.map( pokemon => {
        const type = pokemon?.type?.name
        const letter = type?.charAt(0)
        return type.replace(letter, letter.toUpperCase())
    } )
    const pokemonAbilities = pokemon?.abilities?.map( pokemon => {
        const abilitie = pokemon?.ability?.name
        const letter = abilitie?.charAt(0)
        return abilitie.replace(letter, letter.toUpperCase())
    } )
    const pokemonMoves = pokemon?.moves?.map( pokemon => {
        const move = pokemon?.move?.name
        const letter = move?.charAt(0)
        return move.replace(letter, letter.toUpperCase())
    } )
    const statsPercentage = []
    for( let i = 0; i < 4; i++ ) {
        if( i !== 3 ) {
            statsPercentage.push( `${Math.round((pokemon?.stats?.[i]?.base_stat * 100) / 150)}%` )
        } else {
            statsPercentage.push( `${Math.round((pokemon?.stats?.[i+2]?.base_stat * 100) / 150)}%` )
        }
    }

    return (
        <div className="pokemon-detail-view">
            <div className={ darkMode ? 'background-detail-dark background-detail' : 'background-detail' } >
                <div style={ {backgroundColor: color.color1} }>
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
                </div>
                <h2>#{pokemon?.id}</h2>
                <div className="pokemon-name">
                    <div></div>
                    <h2 style={ {color: color.color1} }>{namePokemon?.replace(letter, letter.toUpperCase())}</h2>
                    <div></div>
                </div>
                <div className="pokemon-characteristics">
                    <div>
                        <h5>Weight</h5>
                        <h3>{pokemon?.weight}</h3>
                    </div>
                    <div>
                        <h5>Height</h5>
                        <h3>{pokemon?.height}</h3>
                    </div>
                </div>
                <div className="pokemon-type-abilitie">
                    <div>
                        <h3>Type</h3>
                        {
                            pokemonType?.length > 1
                            ?
                            <div className="type-abilitie">
                                <span style={ {backgroundColor: color.color3} }>{pokemonType?.[0]}</span>
                                <span style={ {backgroundColor: color.color4} }>{pokemonType?.[1]}</span>
                            </div>
                            :
                            <span className="type-abilitie" style={ {backgroundColor: color.color3} }>{pokemonType?.[0]}</span>
                        }
                    </div>
                    <div>
                        <h3>Abilities</h3>
                        <div className="type-abilitie">
                            {
                                pokemonAbilities?.map( (abilitie, index) => <span key={index}>{abilitie}</span> )
                            }
                        </div>
                    </div>
                </div>
                <div className="pokemon-stats">
                    <div>
                        <h2>Stats</h2>
                        <div></div>
                    </div>
                    <div className="stats">
                        <div>
                            <span>HP</span>
                            <span>{pokemon?.stats?.[0]?.base_stat}/150</span>
                        </div>
                        <div style={ {borderColor: color.color1} }>
                            <div style={ {backgroundColor: color.color1, width: statsPercentage[0]} }></div>
                        </div>
                    </div>
                    <div className="stats">
                        <div>
                            <span>ATTACK</span>
                            <span>{pokemon?.stats?.[1]?.base_stat}/150</span>
                        </div>
                        <div style={ {borderColor: color.color1} }>
                            <div style={ {backgroundColor: color.color1, width: statsPercentage[1]} }></div>
                        </div>
                    </div>
                    <div className="stats">
                        <div>
                            <span>DEFENSE</span>
                            <span>{pokemon?.stats?.[2]?.base_stat}/150</span>
                        </div>
                        <div style={ {borderColor: color.color1} }>
                            <div style={ {backgroundColor: color.color1, width: statsPercentage[2]} }></div>
                        </div>
                    </div>
                    <div className="stats">
                        <div>
                            <span>SPEED</span>
                            <span>{pokemon?.stats?.[5]?.base_stat}/150</span>
                        </div>
                        <div style={ {borderColor: color.color1} }>
                            <div style={ {backgroundColor: color.color1, width: statsPercentage[3]} }></div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn-return" onClick={ () => navigate(-1) }>
                <i className='bx bx-chevron-left'></i>
            </button>
            <div className={ darkMode ? 'background-detail-dark background-detail' : 'background-detail' }>
                <div>
                    <h2>Movements</h2>
                    <div></div>
                </div>
                <div>
                    {
                        pokemonMoves?.map( (move, index) => (
                            <span key={index}
                            className={ darkMode ? 'move move-dark' : 'move' }
                            >
                                {move}
                            </span>
                        ) )
                    }
                </div>
            </div>
        </div>
    )
}

export default PokemonInfo