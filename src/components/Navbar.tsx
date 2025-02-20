
"use client";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
import { signOut, useSession } from 'next-auth/react';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="flex fixed top-0 w-full px-4 py-3 z-50 justify-between items-center rounded-b-2xl shadow-lg bg-transparent backdrop-blur-md">
    

      {/* Hamburger Icon and Dark Mode Button for Mobile */}
      <div className="md:hidden flex items-center gap-x-6">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="transition duration-300"
        >
          {theme === "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-yellow-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-gray-800"
            >
              <path
                fillRule="evenodd"
                d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            className="w-8 h-8 text-gray-400 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Full Menu on Medium Screens and Above */}
      <div className="hidden md:flex items-center gap-x-6">
        <nav className="flex items-center gap-x-8">
          <Link href="/" className="text-sm text-gray-600 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition">
            المخبوزات
          </Link>
          <Link href="/" className="text-sm text-gray-600 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition">
            اتصل بنا
          </Link>
    
        
        
        {!session ? (
          <>
            {/* <Link href="/auth/login" className="text-sm text-gray-600 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition">Login</Link> */}
            <Link href="/auth/signup" className="text-sm text-gray-600 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition">تسجيل الدخول</Link>
          </>
        ) : (
          <>
            <span>مرحبًا، {session.user?.name}</span>
            <button onClick={() => signOut()}>تسجيل الخروج</button>
          </>
        )}
      

        </nav>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="transition duration-300"
        >
          {theme === "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-yellow-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-gray-800"
            >
              <path
                fillRule="evenodd"
                d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Dropdown Menu for Mobile */}
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-pink-100 dark:bg-gray-900 shadow-lg rounded-lg p-2 text-gray-600 dark:text-gray-300 transition-all duration-300 ease-in-out`}
      >
        <li className="text-sm py-1 px-2 hover:bg-yellow-100 dark:hover:bg-gray-700 rounded-md transition duration-300">
          <Link href="/" onClick={handleMenuClick}>المخبوزات</Link>
        </li>
        <li className="text-sm py-1 px-2 hover:bg-yellow-100 dark:hover:bg-gray-700 rounded-md transition duration-300">
          <Link href="/" onClick={handleMenuClick}>اتصل بنا</Link>
        </li>
   
       
        <li className="text-sm py-1 px-2 hover:bg-yellow-100 dark:hover:bg-gray-700 rounded-md transition duration-300">
          <Link href="/auth/signup" onClick={handleMenuClick}>تسجيل الدخول</Link>
        </li>
        
      </ul>
  {/* Logo and Site Name */}
  <div className="flex items-center gap-x-3">

<Link href="/">
  <h1 className="font-extrabold text-xl hover:text-2xl md:text-5xl hover:md:text-6xl text-yellow-600 hover:text-gray-400 font-serif transition duration-300">
    خباز الخير
  </h1>
</Link>
</div>

    </header>
  );
};

export default Header;
