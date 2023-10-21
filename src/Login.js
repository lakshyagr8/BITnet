import { Button } from '@mui/material';
import React from "react";
import "./Login.css";
import { useStateValue } from './Stateprovider';
import { auth } from "./firebase";
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
function Login() {

    const [state, dispatch] = useStateValue();
    const signIn = () => {
        signInWithPopup(auth, new GoogleAuthProvider())
            .then((result) => {
                dispatch({
                    type: 'SET_USER',
                    user: result.user,
                });
            })
            .catch((error) => alert(error.message));
    };
    return (
        <div className="login">

            <div className="login_logo">
                <img src="./uninet.png" alt="" />
                <img src="./textlogo.png" alt=""/>
            </div>

            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login