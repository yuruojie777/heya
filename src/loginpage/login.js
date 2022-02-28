import Cookies from 'js-cookie';
import React, {useState} from 'react';
import {Link, Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import './css/login.css';

const LoginForm = ()=>{
const baseUrl = 'http://habitracker.club/heya/';
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const [islogin, setIslogin] = useState(0);
const navigate = useNavigate();
function login (api, data) {
    fetch(baseUrl+api, {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        credentials: 'same-origin',
        body: JSON.stringify(data),}
    )
    .then((resp) => {
        if(resp.status >= 200 && resp.status <= 299) {
            return resp.json();
        } else {
            throw new Error(resp.statusText);
        }
    })
    .then(user =>{
        if(user['code']!==1){
            setError(user['message']);
            // alert(user['message']);
            return;
        }
        setIslogin(1);
        console.log("login");
        console.log(document.cookie);
        navigate('/');
    })
    .catch((error)=> alert(error));

};

function handleSubmit (e) {
    e.preventDefault();
    if(email && password) {
        if(!emailValidation(email)) {
            // alert("format incorrect");
            setError("Format incorrect!");
            return;
        }
        const data = {email: email, password: password};
        console.log(data);
        login('login',data);
    } else {
        // alert('empty values');
        setError("Empty values!");
        return;
    }
}

function emailValidation(email){
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
    return (
        <div className='loginform'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <input className='input-email' 
                    type="text" name="email" 
                    value={email} 
                    placeholder="Email" 
                    autoComplete='off' 
                    onClick={(e)=>setError('')}
                    onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='form-control'>
                    <label></label>
                    <input className='input-password'
                    type="password" 
                    name="password" 
                    value={password} 
                    placeholder="Password"
                    autoComplete='off'
                    onClick={(e)=>setError('')}
                    onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className='test'>
                    <div className='error'>{error}</div>
                    <div className='register-link'><Link to='/register'>Register now!</Link></div>
                </div>

                
                <div><button type='submit' className='btn'>Sign in</button></div>
                <div className='div-help'><Link className='help-link' to='/help'>Need help?</Link></div>
            </form>
        </div>
    );
}

export default LoginForm;