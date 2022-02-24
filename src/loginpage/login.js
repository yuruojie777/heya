import React, {useState} from 'react';


const LoginForm = ()=>{
    const baseUrl = 'http://localhost:8080/heya/';

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
        const user = {id: new Date().getTime().toString(), email : email, password: password};
        console.log(user);
    } else {
        alert('empty values');
        return;
    }
    const data = {email: email, password: password};
    console.log(data);
    login('login',data);
}
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    Email: <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='form-control'>
                    Password: <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type='submit' className='btn'>Submit</button>
                <button type='reset'>Reset</button>
            </form>
        </div>
    );
}

export default LoginForm;