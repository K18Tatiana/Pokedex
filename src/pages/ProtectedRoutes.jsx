import { Outlet, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

const ProtectedRoutes = () => {

    const nameInfo = useSelector( state => state.name )
    const darkMode = useSelector( state => state.darkMode )

    if( nameInfo !== "" ) {
        return (
            <div>
                <h1 className={ darkMode ? 'title title-dark' : 'title' } >P<span>O</span>KÉ<span>D</span>EX</h1>
                <Outlet />
            </div>
        )
    } else {
        return <Navigate to='/' />
    }

}

export default ProtectedRoutes