import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './css/login.css';

const RegisterForm = ()=>{
    const baseUrl = 'http://habitracker.club/heya/';

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

function login (api, data) {
    fetch(baseUrl+api, {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
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
        alert(user['message']);
    })
    .catch((error)=> alert(error));

};

function handleSubmit (e) {
    e.preventDefault();
    if(email && password) {
        if(!emailValidation(email)) {
            alert("format incorrect");
            return;
        }
        const data = {email: email, password: password};
        console.log(data);
        login('register',data);
    } else {
        alert('empty values');
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
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <input className='input-email' type="text" name="email" value={email} placeholder="Email" autoComplete='off' onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='form-control'>
                    <label></label>
                    <input className='input-password'
                    type="password" 
                    name="password" 
                    value={password} 
                    placeholder="Password"
                    autoComplete='off'
                    onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div><Link className='register-link' to='/login'>Login now!</Link></div>
                
                <button type='submit' className='btn'>Sign up</button>
                <div className='div-help'><Link className='help-link' to='/help'>Need help?</Link></div>
                {/* <button type='reset' onClick={(e)=>{setEmail('');setPassword('');}}>Reset</button> */}
            </form>
        </div>
    );
}

export default RegisterForm;