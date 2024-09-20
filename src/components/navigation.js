import React from 'react';
const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg ">
            <a className="navbar-brand" href="#">
            <img src="thumb.png" className="logo" alt="Avatar"></img>
            </a>
            <div className="collapse navbar-collapse navtext">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact-form">Contact</a>
                </li>
                <li></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
