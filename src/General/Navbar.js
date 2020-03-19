import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="work-container active">
                <Link to="/">work</Link>
            </div>
            <div className="contact-container">
                <Link to="/contact">contact</Link>
            </div>
        </div>
    )
}

export default Navbar;
