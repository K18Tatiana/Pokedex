import '../assets/styles/Home.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeName } from '../store/slices/name.slice'

const Home = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch( changeName( e.target[0].value ) )
        navigate( '/pokedex' )
    }

    return (
        <div className='home'>
            <div>
                <h1>P<span>O</span>KÉ<span>D</span>EX</h1>
                <img src="/entrenador-pokemon.png" alt="" />
            </div>
            <h2>Hello coach!</h2>
            <p>To start, please write your name</p>
            <form onSubmit={ (e) => handleSubmit(e) }>
                <input type="text" placeholder='Type your name...' />
                <button type='submit'>Start</button>
            </form>
            <section>
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
                <div className="wave wave4"></div>
            </section>
        </div>
    )
}

export default Home