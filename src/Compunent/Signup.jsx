import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const history = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/signup', {
                email,
                password
            });

            if (response.data == "exist") {
                alert("User already exists");
            } else if (response.data == "notexist") {
                history(`/home`, { state: { id: email } });
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred while processing your request');
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 loginPage logingpage'>
            <div className='p-3 rounded border loginForm'>
                <h2>Signup</h2>
                <form>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder='Enter Email'
                            name='email'
                            className='form-control rounded-0'
                            autoComplete='off'
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type='password'
                            placeholder='Enter Password'
                            name='password'
                            className='form-control rounded-0'
                        />
                    </div>
                    <button
                        onClick={handleSubmit}
                        type='submit'
                        className='btn btn-success w-100 rounded-0'
                    >
                        SignUp
                    </button>
                    <p>You agree to our terms and policies</p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
