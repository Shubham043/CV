import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';

function SignIn() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/profiles/signUp', {
        username,
        email,
        password
      });
      console.log(response.data);
      
      // Check if the response contains a JWT token
      if (response.data.token) {
        // Save the JWT token to local storage
      localStorage.setItem('token', response.data.token);
   
        // Redirect the user to the login page
        navigate('/SignIn');
      }
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
        <h2 className="text-xl font-bold mb-4  text-gradient font-poppins">
                Sign Up Here
            </h2>
    <div className="ques">
    <label className="block mb-1 font-medium font-semibold text-gradient font-poppins leading-8">
                       
                    </label>
      <input type="text" name="username" className="w-full p-2 border font-poppins bg-black-gradient text-white rounded-md" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
      <br />
      <label className="block mb-1 font-medium font-semibold text-gradient font-poppins leading-8">
                        Email
                    </label>
      <input type="text" name="email" className="w-full p-2 border font-poppins bg-black-gradient text-white rounded-md " value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
      <br />
      <label className="block mb-1 font-medium font-semibold text-gradient font-poppins leading-8">
                        Password
                    </label>
      <input type="password" name="password" className="w-full p-2 border font-poppins bg-black-gradient text-white rounded-md" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
    </div>
    <button type="submit" className="btn text-white bg-blue-500 mt-2 text-white px-4 py-2 rounded-md" onClick={handleSubmit}>Sign Up</button>
    <div className="signup text-white ">
      <span>already have an account</span> <a href="/SignIn" className='bg-blue-500 text-white px-4 py-2 rounded-md'>Log In here</a>.
    </div>
  </div>
  
 
  );
}

export default SignIn;