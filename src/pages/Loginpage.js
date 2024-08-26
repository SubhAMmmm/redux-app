import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

import Homenav from '../components/Homenav';

const Loginpage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }
    
    dispatch(login({
      name: name,
      email: email,
      password: password,
      loggedIn: true,
    }));
  };                

  return (
    <>
      <Homenav/>
      <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
       style={{ backgroundImage: `url('/bgimage.jpg')`}}>
        <form 
          onSubmit={handleLogin}
          className="max-w-md w-full p-10 bg-gray-400 rounded-lg shadow-md bg-opacity-90"
        >
          <div className="mb-4">
            <label className="font-sans block text-black text-center text-lg font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-black-700 text-center text-lg font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-center text-black-700 text-lg font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-center">
            <button 
              type="submit"
              className="bg-blue-700  text-white font-bold w-36 py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Loginpage;
