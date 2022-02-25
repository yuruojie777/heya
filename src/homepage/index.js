import React from 'react';
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';
import LoginForm from '../loginpage/login';
import RegisterForm from '../loginpage/regitster';
import Home from './home';
import Navbar from './navbar';


const Setup = ()=>{
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                    <Route path="login" element={<LoginForm/>}/>
                    <Route path="register" element={<RegisterForm/>}/>
            </Routes>
        </Router>
    );

};

export default Setup;