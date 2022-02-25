import React from 'react';
import {Link} from 'react-router-dom';
import './css/navbar.css';

const Navbar = ()=>{
    return (
        <nav>
            <ul>
                <li>
                    {/* <Link to="/" className='link'>Home</Link>
                    <Link to="/about" className='link'>About</Link>
                    <Link to="/login" className='link'>Login</Link>
                    <Link to="/people" className='link'>People</Link> */}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;