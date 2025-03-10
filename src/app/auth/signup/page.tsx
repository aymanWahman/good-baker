"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.status === 201) {
        // إذا نجح التسجيل، قم بالتوجيه إلى صفحة about
        router.push('/lang');
      } else {
        const data = await res.json();
        setError(data.message || 'An error occurred');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setError('An unexpected error occurred');
    }
  };

  return (
    <div className="mt-32 mx-auto my-9 relative max-w-screen-lg p-8 space-y-6 bg-pink-200 rounded-lg shadow-lg' ">
      <h1 className="text-center font-bold font-serif text-4xl text-pink-400">Signup</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 mb-9 items-center text-center text-4xl bg-pink-200 rounded-lg shadow-lg">
      <div className="absolute top-0 left-0 w-32 h-32 bg-pink-300 rounded-full opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-400 rounded-full opacity-30"></div>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="text"
          placeholder="Enter your name:"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="p-9 m-5 rounded-tl-3xl rounded-br-3xl"
        />
        <input
          type="email"
          placeholder="Enter your email:"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-9 m-5 rounded-tl-3xl rounded-br-3xl"
        />
        <input
          type="password"
          placeholder="Enter your password:"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="p-9 m-5 rounded-tl-3xl rounded-br-3xl"
        />
        <button type="submit" className="text-4xl p-5 m-5 bg-slate-500 rounded-xl">Signup</button>
        
      </form>
      <h3 className='text-center text-2xl text-pink-600'>If you have account: </h3>
      <Link  href="/auth/login">
          <h1 className="font-extrabold text-xl hover:text-2xl md:text-5xl hover:md:text-6xl text-pink-400 hover:text-gray-400 font-serif transition duration-300">
            Login
          </h1>
        </Link>
      

    </div>
  );
};

export default Signup;
