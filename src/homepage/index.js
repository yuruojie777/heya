import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginForm from '../loginpage/login';
import RegisterForm from '../loginpage/regitster';
import Home from './home';
import About from'../about/about';
import Movie from '../movie/movie';
import Talk from '../talk/talk';
import Travel from '../travel/travel';
import Game from '../game/game';
import News from '../news/news';
import Setting from '../setting/setting';
import Navbar from './navbar';

const Setup = ()=>{
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                    <Route path="login" element={<LoginForm/>}/>
                    <Route path="register" element={<RegisterForm/>}/>
                    <Route path="setting" element={<Setting/>}/>
                    <Route path="news" element={<News/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="movie" element={<Movie/>}/>
                    <Route path="talk" element={<Talk/>}/>
                    <Route path="travel" element={<Travel/>}/>
                    <Route path="game" element={<Game/>}/>
            </Routes>
        </Router>
    );

};

export default Setup;