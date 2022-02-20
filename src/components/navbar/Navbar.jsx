import React from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = React.useState(false);

    const handleClick = () => setClick(!click)

    return (
        <div className="header">
            <div className="container">
                <h1>De<span className="primary">Fi</span></h1>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li>
                    <Link to="hero" smooth={true} duration={1000}><a href="#">Home</a></Link>
                    </li>
                    <li>
                    <Link to="featured" smooth={true} duration={1000}><a href="#">Featured</a></Link>
                    </li>
                    <li>
                    <Link to="signup" smooth={true} duration={1000}><a href="#">Earn</a></Link>
                    </li>
                    <li>
                    <Link to="footer" smooth={true} duration={1000}><a href="#">Contact</a></Link>
                    </li>
                </ul>
                <div className="btn-group">
                    <button className="btn">Connect Wallet</button>
                </div>
                <div className="hamburger" onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{ color: '#333' }} />) : (<FaBars size={20} style={{ color: '#333' }} />) }
                </div>
            </div>
        </div>
    )
}

export default Navbar