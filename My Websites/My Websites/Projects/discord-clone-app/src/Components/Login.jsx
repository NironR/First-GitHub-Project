import { Button } from '@mui/material';
import React from 'react';
import { auth, provider } from "../firebase/init"
import './Login.css'

const Login = () => {
    const signIn = () => {
        auth.signInWithPopup(provider)
        .catch((error) => alert(error.message))
    }


    return (
        <div className='login'>
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Discord_logo.svg/1024px-Discord_logo.svg.png" 
                alt=""
                 />
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    );
}

export default Login;
