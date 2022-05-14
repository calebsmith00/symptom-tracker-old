import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

export default function Navbar() {
    const [currentPage, setCurrentPage] = useState({
        link: '/',
        class: ''
    })

    useEffect(() => {
        if (currentPage.link === '/') setCurrentPage({
            ...currentPage,
            class: 'navbar-link-active'
        })
    }, [currentPage])

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
            </div>
        </div>
    )
}