import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice'
import { auth } from './firebase';
import './Login.css'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
            }));
        }).catch(error => alert(error))
    };

    const register = () =>{
        if(!name) {
            return alert("Please enter full name!")
        }        
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth)=> {
            userAuth.user.updateProfile({
                displayName: name,
            })
            .then(() => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                    })
                );
            })
        }).catch(error => alert(error));
    };
   

    return (
        <div className="login">            
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png" alt=""/>

            <form action="">
                <input 
                value={name}
                onChange={(e) => setName(e.target.value)} 
                placeholder="Full name (required if registering)" 
                type="text"
                />
               
                <input 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="email" 
                type="email"
                />

                <input 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
                type="password"
                />

                <button 
                type="submit" 
                onClick={loginToApp} >Sign In</button>

                <p>Not a member? <span className="login_register" onClick={register}>Register Now</span></p>
            </form>
        </div>
    )
}

export default Login;
