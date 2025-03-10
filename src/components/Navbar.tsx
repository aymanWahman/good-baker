'use client';
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiUser, FiLogOut } from 'react-icons/fi';
import DarkModeToggle from "./DarkmodeToggle";
import { useSession, signOut } from "next-auth/react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { data: session } = useSession();

  const menuItems = [
    { href: "/about", label: "اتصل بنا" },
    // { href: "/aboutProducts", label: "عن منتجاتنا" },
  ];

  return (
    <header className="fixed top-0 w-full px-4 py-3 z-50 bg-transparent backdrop-blur-[2px] border-b border-gray-200 dark:border-gray-700 rounded-b-2xl shadow-sm">
      <div className="container mx-auto flex justify-between items-center lg:flex-row flex-row-reverse">
        {/*  تسجيل الدخول + وضع الدارك مود */}
        <div className="flex items-center gap-x-4 lg:order-first order-last">
          {/* زر الدارك مود */}
          <DarkModeToggle />

          {/* تسجيل الدخول */}
          {session ? null : (
            <Link
              href="/auth/login"
              className="px-4 py-2 text-lg text-seaBlue hover:text-sandyGold hover:bg-gray-100/50 rounded-lg transition duration-300"
            >
              تسجيل الدخول
            </Link>
          )}

            
        <div className="hidden lg:flex items-center gap-x-6">
          <nav className="flex items-center gap-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-lg text-seaBlue hover:text-sandyGold hover:bg-gray-100/50 rounded-lg transition duration-300 whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        </div>

        {/*  الشعار */}
        <div className="flex items-center lg:order-last order-first">
          {/* الشعار - دائماً في الناحية اليمنى */}
          <Link href="/" className="flex items-center">
            <h1 className="font-extrabold text-xl md:text-3xl text-seaBlue hover:text-sandyGold transition duration-300">
              خباز الخير
            </h1>
          </Link>
        </div>

        {/* قائمة الموبايل */}
        <div className="lg:hidden flex items-center gap-x-4">
    
          {/* زر القائمة */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menu-button p-2 rounded-full hover:bg-gray-100/50 text-seaBlue transition duration-300"
          >
            <FiMenu className="w-6 h-6" />
          </button>
        </div>

        {/* قائمة الموبايل */}
        {isMenuOpen && (
          <div className="mobile-menu absolute top-full right-4 left-4 mt-2 rounded-lg shadow-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-md ring-1 ring-black/5 lg:hidden">
            <nav className="py-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-gray-700/50 text-right"
                >
                  {item.label}
                </Link>
              ))}
              {!session && (
                <Link
                  href="/auth/signin"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-gray-700/50 text-right"
                >
                  تسجيل الدخول
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;