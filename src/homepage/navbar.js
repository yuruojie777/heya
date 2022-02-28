import React,{useState}from "react";
import {Link} from 'react-router-dom';
import './css/home.css';
import Cookies from 'js-cookie';

const Navbar = ()=>{
    const [avatar,setAvatar] = useState('./css/user.png');
    if(Cookies.get('login')!=null)alert(Cookies.get('login'));
    return (
        <div className="header">
            <div className="logo">
                <Link to='/'>
                    <img src={[require('./css/logo.png')]}></img>
                </Link>
            </div>
            <nav>
                <ul>
                    <li><Link className="link" to='/news'>NEWS</Link></li>
                    <li><Link className="link" to='/movie'>MOVIE</Link></li>
                    <li><Link className="link" to='/travel'>TRAVEL</Link></li>
                    <li><Link className="link" to='/about'>ABOUT</Link></li>
                    <li><Link className="link" to='/game'>GAME</Link></li>
                    <li><Link className="link" to='/talk'>TALK</Link></li>
                </ul>
            </nav>
            <div className="user"><Link to='/login'><img src={[require('./css/user.png')]}></img></Link></div>
            <div className="setting"><Link to='/setting'><img src={[require('./css/settings.png')]}></img></Link></div>
        </div>
    );
}

export default Navbar;