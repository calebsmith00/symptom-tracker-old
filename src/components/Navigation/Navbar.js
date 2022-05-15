import { NavLink } from 'react-router-dom'
import './Navbar.scss'

export default function Navbar() {
    const getActive = ({ isActive }) => {
        return isActive ?
            "navbar-link navbar-link-active"
            : "navbar-link"
    }

    // Render
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <p>Symptom Tracker</p>
            </div>

            <div className='navbar-links'>
                <span className="navbar-link-border">
                    <NavLink to="/" className={getActive}>
                        Home
                    </NavLink>
                </span>

                <span className="navbar-link-border">
                    <NavLink to="/user/login" className={getActive}>
                        Login
                    </NavLink>
                </span>

                <span className="navbar-link-border">
                    <NavLink to="/user/symptom-tracker" className={getActive}>
                        Track Now!
                    </NavLink>
                </span>
            </div>
        </div>
    )
}