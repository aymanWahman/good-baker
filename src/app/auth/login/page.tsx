
"use client";

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await signIn('credentials', {
        email,
        password,
        redirect: false, // عدم إعادة التوجيه تلقائيًا
      });

      if (response?.ok) {
        router.push('/'); // توجيه المستخدم إلى /lang بعد نجاح تسجيل الدخول
      } else {
        console.error('Login failed:', response?.error);
      }
    } catch (error) {
      console.error('Error during signIn:', error); // عرض أي خطأ يظهر في الاستجابة
    }
  };

  return (
    <div className='mt-32 mx-auto my-9 relative max-w-screen-lg p-8 space-y-6 bg-pink-200 rounded-lg shadow-lg'>
      <h1 className=' text-center font-bold font-serif text-4xl'>Login</h1>
      <form onSubmit={handleSubmit} className='grid grid-cols-1 mb-9 items-center text-center text-4xl bg-pink-200 rounded-lg shadow-lg '>
      
      <div className="absolute top-0 left-0 w-32 h-32 bg-pink-300 rounded-full opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-400 rounded-full opacity-30"></div>
      
        <input
          type="email"
          placeholder="Enter your email:"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className='p-9 m-5 rounded-tl-3xl rounded-br-3xl'
        />
        <input
          type="password"
          placeholder="Enter your password:"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className='p-9 m-5 rounded-tl-3xl rounded-br-3xl'
        />
        <button type="submit" className='p-5 m-5 bg-slate-500 rounded-xl hover:underline'>Login</button>
      </form>



    </div>
  );
};

export default Login;
