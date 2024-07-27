import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
    return (
        <>
            <div className="main-container">
                <div className="logo-section">
                    <NavLink className="logo" to="/">MERN </NavLink>
                </div>

                <div className="nav-links">
                    <li><NavLink className="links" to="/">Home</NavLink></li>
                    <li><NavLink className="links" to="/about">about</NavLink></li>
                    <li><NavLink className="links" to="/contact">contact</NavLink></li>
                    <li><NavLink className="links" to="/service">service</NavLink></li>
                    <li><NavLink className="links" to="/login">login</NavLink></li>
                    <li><NavLink className="links" to="/register">register</NavLink></li>
                </div>




            </div>
        </>
    )
}

export default Navbar