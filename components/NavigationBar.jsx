import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavigationBar = () => {
  const router = useRouter();
  
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/product" },
    { name: "Service", href: "/service" },
    { name: "Blog", href: "/belog" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
  ];

  const isActive = (path) => router.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 dark:bg-gray-900/80 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
                N
              </div>
              <span className="ml-3 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                NextRoute
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    isActive(link.href)
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95">
                Get Started
              </button>
            </div>
          </div>

          <div className="md:hidden">
            {/* Mobile menu button could go here */}
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
 // Update at 2023-01-11 15:58:50
 // Update at 2023-01-23 15:37:00
 // Update at 2023-02-08 14:35:33
 // Update at 2023-02-15 13:25:01
 // Update at 2023-02-16 16:12:48
 // Update at 2023-03-13 12:32:16
 // Update at 2023-03-14 11:23:27
 // Update at 2023-04-03 09:45:37
 // Update at 2023-04-03 15:25:18
