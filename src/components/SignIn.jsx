import  { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
// import './SignIn.css';
import axios from 'axios';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
   
    e.preventDefault();
    navigate('/ProfileForm');
   
};


  return (
    <div className="max-w-md mx-auto p-4">
      <form >
        <div className="ques">
        <input type="text" name="email" className="w-full p-2 border font-poppins bg-black-gradient text-white rounded-md" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' />
      
          <br />
          <input type="text" name="password" className="w-full p-2 border font-poppins bg-black-gradient text-white rounded-md" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
      <br />
        </div>
        <button onClick={handleSubmit} type="submit" className='btn text-white bg-blue-500 mt-2 text-white px-4 py-2 rounded-md'> SignIn</button>
        {error && <p className="error">{error}</p>}
      </form>
      <br />
      <span className='text-white font-poppins'> dont have an account</span> <a className='btn text-white bg-blue-500 mt-2 text-white px-4 py-2 rounded-md' href="/">Sign In here</a>.
    </div>
  );
}

export default SignIn;