import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import classes from './Login.module.css';

const Login = (props) => {
    const [ enteredEmail, setenteredEmail] = useState('');
    const [ enteredPassword, setenteredPassword] = useState('');
    const [ isFormValid, setIsFormValid] = useState(false);
   
    useEffect(()=>{
        setIsFormValid(enteredEmail.includes('@') && !(enteredPassword.length<5));     
    }, [enteredEmail, enteredPassword]);

    const onEmailChangeHandler = (e) => { 
        setenteredEmail(e.target.value);
    }

    const onPasswordChangeHandler = (e) => {
        setenteredPassword(e.target.value)
    } 
    const submitHandler = (e) =>{
        e.preventDefault();
        props.onLogin(enteredEmail, enteredPassword);
    }
    return (
        <Card className = {classes.login}>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                <label htmlFor = 'firstName'> Firstname  </label>
                <input type = 'text' id = 'firstName' ></input>
                </div>
                <div className={classes.control}>
                <label htmlFor = 'lastName'> LastName </label>
                <input type = 'text' id = 'lastName' ></input>
                </div>
                <div className={classes.control}>
                <label htmlFor = 'email'> Email </label>
                <input type = 'text' id = 'email' value={enteredEmail} onChange = {onEmailChangeHandler}></input>
                </div>
                <div className={classes.control}>
                <label htmlFor = 'password'> Password </label>
                <input type = 'password' id = 'password' value={enteredPassword} onChange = {onPasswordChangeHandler}></input>
                
                </div>
                <button className = {classes.button} type = 'submit' disabled = {!isFormValid}>Login</button>

            </form>
        </Card>
    )    
}

export default Login;