import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { Link, Route, useNavigate } from 'react-router-dom';
import Signup from './Signup';

const Login = () => {
    const history = useNavigate()
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const handelsubmit=(element)=>{ 
        element.preventDefault();
        if(email == 'admin@gmail.com' && password == 'admin'){
           history('/login/admindes')
        }else if(email == 'student@gmail.com' && password == 'student'){
            history('/login/studentlogin/')
        }
    //     try{
    //              axios.post('http://localhost:3000/',{
    //                 email,password
    //             })
    //             .then(res=>{
    //                 if(res.data=="exist"){
    //                 history("/home",{state:{id:email}})
    //                 }else if(res.data=="notexist"){
    //                     alert("user is not loged in")
    //                 }
                    
    //             }
    //             )
    //             .catch(e=>{
    //                 alert('wrong details')
    //                 console.log(e)
    //             })
    //     }
    //     catch(e){
    //         console.log(e)

    //     }
    }
  return (
    <>
     <div class='d-flex justify-content-center align-items-center vh-100 loginPage logingpage'>
    <div class='p-3 rounded border loginForm'>
        <div class='text-danger'>
        </div>
        <h2>Login</h2>
        <form >
            <div class='mb-3'>
                <label for="email"><strong>Email</strong></label>
                <input type="email" placeholder='Enter Email' name='email' 
                    onChange={(e)=>setemail(e.target.value)} class='form-control rounded-0' autoComplete='off'/>
            </div>
            <div class='mb-3'>
                <label for="password"><strong>Password</strong></label>
                <input type='password' placeholder='Enter Password' name='password'
                    onChange={(e)=>setpassword(e.target.value)} class='form-control rounded-0' />
            </div>
            <button onClick={handelsubmit} type='submit' class='btn btn-success w-100 rounded-0'> Log in</button>
            <p>You agree to our terms and policies</p>
            <Link to='/signup'>
            <button class='btn btn-secondary border w-100 rounded-0'>Create Account</button>
            </Link>
            
        </form>
    </div>
</div>

    </>
  )
}

export default Login;
