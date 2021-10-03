import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../Features/User'

function Login() {

    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() =>{
                dispatch(login({name:"Pedro", age:20, email:"Pedro2gmail.com"}))
            }}> 
            
            Login</button>

            <button onClick={() =>{
                dispatch(logout())
            }}> 
            
            Logout</button>
        </div>
    )
}

export default Login
