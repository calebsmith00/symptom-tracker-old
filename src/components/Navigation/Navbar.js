import { useEffect, useState } from 'react'
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
    }, [])

    // Render
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <p>Symptom Tracker</p>
            </div>

            <div className='navbar-links'>
                <span className="navbar-link-border"><p className={`navbar-link ${currentPage.class}`}>Home</p></span>
                <span className="navbar-link-border"><p className='navbar-link'>Login</p></span>
            </div>
        </div>
    )
}