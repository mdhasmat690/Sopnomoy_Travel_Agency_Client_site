import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/UseAuth';

const Login = () => {
    const {signInUsingGoogle}= useAuth()

    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || "/"
    const handleSubmitLogin = () =>{
        signInUsingGoogle()
        .then((result)=>{
            console.log(result.user)
            history.push(redirect_url)
            
        })
    }
    return (
        <div className="my-5">
            <h2>Login with google</h2>
            <Button className="my-3" onClick={handleSubmitLogin} variant="primary">Google Login</Button>
           
        </div>
    );
};

export default Login;