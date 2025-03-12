import React, { useEffect, useState } from 'react';
import logo from '../src/assets/logo.svg'
import { IoIosSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState('/');

    useEffect(() => {
        setActiveMenu(location.pathname);
    }, [location]);

    const isActive = (path) => {
        if (path === '/') {
            return activeMenu === '/';
        }
        return activeMenu === path || (path !== '/' && activeMenu.startsWith(path));
    };

    return (
        <div>
            <div className=''>
                <header className="fixed top-0 z-10 w-full">
                    {/* Promotions only for pc  */}
                    <div className="bg-[#FA6C41]  hidden md:block text-white py-2 px-4 text-sm">
                        <div className='flex justify-between  w-10/12 mx-auto'>
                            <div className=''>
                                <p className='mt-2'>Get 15% Discount + FREE surprise gift on your first order</p>
                            </div>

                            {/* Top navigation */}
                            <div className='hidden md:block'>
                                <div className="py-2 px-4 text-sm space-x-6">
                                    <a href="#about" className="hover:underline transition-colors duration-200">About Us</a>
                                    <a href="#contact" className="hover:underline transition-colors duration-200">Contact Us</a>
                                    <a href="#blog" className="hover:underline transition-colors duration-200">Blog</a>
                                    <a href="#faqs" className="hover:underline transition-colors duration-200">FAQs</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* desktop navigation */}
                    <div className="bg-white shadow-md">
                        <div className='md:w-10/12 mx-auto px-4 py-3 flex items-center justify-between'>
                            {/* Logo */}
                            <div className="flex items-center">
                                <Link to='/' className="mr-2">
                                    <img
                                        src={logo}
                                        alt="Petzzle Logo"
                                        className="w-[162px] h-[45px]"
                                    />
                                </Link>
                            </div>

                            {/* Desktop Navigation */}
                            <nav className="hidden md:flex items-center space-x-8">
                                <Link
                                    to='/'
                                    className={`font-bold transition-colors duration-200 ${isActive('/') ? 'text-orange-500' : 'hover:text-orange-500'}`}
                                >
                                    Home
                                </Link>

                                <Link
                                    to='/shop'
                                    className={`font-bold transition-colors duration-200 ${isActive('/shop') ? 'text-orange-500' : 'hover:text-orange-500'}`}
                                >
                                    Shop
                                </Link>

                                <div className="relative group">
                                    <Link
                                        to='/categories'
                                        className={`font-bold flex items-center transition-colors duration-200 ${isActive('/categories') ? 'text-orange-500' : 'hover:text-orange-500'}`}
                                    >
                                        Categories
                                        <span className="bg-[#199588] text-white text-xs ml-1 px-1 rounded">SALE</span>
                                    </Link>
                                </div>

                                <div className="relative group">
                                    <Link
                                        to='/products'
                                        className={`font-bold flex items-center transition-colors duration-200 ${isActive('/products') ? 'text-orange-500' : 'hover:text-orange-500'}`}
                                    >
                                        Products
                                        <span className="bg-[#E62A65] text-white text-xs ml-1 px-1 rounded">HOT</span>
                                    </Link>
                                </div>

                                <Link
                                    to='/deals'
                                    className={`font-bold transition-colors duration-200 ${isActive('/deals') ? 'text-orange-500' : 'hover:text-orange-500'}`}
                                >
                                    Top deals
                                </Link>

                                <Link
                                    to='/elements'
                                    className={`font-bold transition-colors duration-200 ${isActive('/elements') ? 'text-orange-500' : 'hover:text-orange-500'}`}
                                >
                                    Elements
                                </Link>
                            </nav>

                            {/* Right Section */}
                            <div className="flex items-center space-x-4">

                                <button className="hover:text-orange-500 transition-colors duration-200">
                                    <IoIosSearch className='text-2xl'></IoIosSearch>
                                </button>


                                <button className="hover:text-orange-500 transition-colors duration-200 ">
                                    <IoPersonOutline className='text-2xl'></IoPersonOutline>
                                </button>


                                <button className="relative hover:text-orange-500 transition-colors duration-200 hidden md:block">
                                    <CiHeart className='text-3xl mt-0.5'></CiHeart>
                                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                                </button>

                                <button className="relative hover:text-orange-500 transition-colors duration-200">
                                    <IoBagOutline className='text-2xl'></IoBagOutline>
                                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">4</span>
                                </button>

                                {/* Mobile menu button */}
                                <button
                                    className="md:hidden focus:outline-none"
                                    onClick={toggleMenu}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    {isMenuOpen && (
                        <div className="md:hidden bg-white shadow-md border-t">
                            {/* Primary Navigation */}
                            <div className="px-2 py-3 space-y-1">
                                <Link
                                    to="/"
                                    className={`flex items-center justify-between rounded-lg p-3 font-bold transition-all duration-200 ${isActive('/')
                                        ? 'bg-orange-50 text-orange-500 border-l-4 border-orange-500'
                                        : 'hover:bg-gray-50 hover:text-orange-500'
                                        }`}
                                >
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>
                                        Home
                                    </div>
                                    {isActive('/') && (
                                        <motion.div
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="h-2 w-2 rounded-full bg-orange-500"
                                        />
                                    )}
                                </Link>

                                <Link
                                    to="/shop"
                                    className={`flex items-center justify-between rounded-lg p-3 font-bold transition-all duration-200 ${isActive('/shop')
                                        ? 'bg-orange-50 text-orange-500 border-l-4 border-orange-500'
                                        : 'hover:bg-gray-50 hover:text-orange-500'
                                        }`}
                                >
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                        Shop
                                    </div>
                                    {isActive('/shop') && (
                                        <motion.div
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="h-2 w-2 rounded-full bg-orange-500"
                                        />
                                    )}
                                </Link>

                                <Link
                                    to="/categories"
                                    className={`flex items-center justify-between rounded-lg p-3 font-bold transition-all duration-200 ${isActive('/categories')
                                        ? 'bg-orange-50 text-orange-500 border-l-4 border-orange-500'
                                        : 'hover:bg-gray-50 hover:text-orange-500'
                                        }`}
                                >
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                        </svg>
                                        Categories
                                        <span className="bg-[#199588] text-white text-xs ml-2 px-1 py-0.5 rounded">SALE</span>
                                    </div>
                                    {isActive('/categories') && (
                                        <motion.div
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="h-2 w-2 rounded-full bg-orange-500"
                                        />
                                    )}
                                </Link>

                                <Link
                                    to="/products"
                                    className={`flex items-center justify-between rounded-lg p-3 font-bold transition-all duration-200 ${isActive('/products')
                                        ? 'bg-orange-50 text-orange-500 border-l-4 border-orange-500'
                                        : 'hover:bg-gray-50 hover:text-orange-500'
                                        }`}
                                >
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                        </svg>
                                        Products
                                        <span className="bg-[#E62A65] text-white text-xs ml-2 px-1 py-0.5 rounded">HOT</span>
                                    </div>
                                    {isActive('/products') && (
                                        <motion.div
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="h-2 w-2 rounded-full bg-orange-500"
                                        />
                                    )}
                                </Link>

                                <Link
                                    to="/deals"
                                    className={`flex items-center justify-between rounded-lg p-3 font-bold transition-all duration-200 ${isActive('/deals')
                                        ? 'bg-orange-50 text-orange-500 border-l-4 border-orange-500'
                                        : 'hover:bg-gray-50 hover:text-orange-500'
                                        }`}
                                >
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                        </svg>
                                        Top deals
                                    </div>
                                    {isActive('/deals') && (
                                        <motion.div
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="h-2 w-2 rounded-full bg-orange-500"
                                        />
                                    )}
                                </Link>

                                <Link
                                    to="/elements"
                                    className={`flex items-center justify-between rounded-lg p-3 font-bold transition-all duration-200 ${isActive('/elements')
                                        ? 'bg-orange-50 text-orange-500 border-l-4 border-orange-500'
                                        : 'hover:bg-gray-50 hover:text-orange-500'
                                        }`}
                                >
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                        </svg>
                                        Elements
                                    </div>
                                    {isActive('/elements') && (
                                        <motion.div
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="h-2 w-2 rounded-full bg-orange-500"
                                        />
                                    )}
                                </Link>
                            </div>

                            {/* Secondary Navigation */}
                            <div className="border-t px-2 py-2 bg-gray-50">
                                <p className="text-xs uppercase text-gray-500 font-semibold px-3 py-2">More Information</p>

                                <Link
                                    to="/about"
                                    className={`flex items-center rounded-lg p-2 transition-all duration-200 ${isActive('/about')
                                        ? 'text-orange-500 font-medium'
                                        : 'text-gray-600 hover:text-orange-500'
                                        }`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    About Us
                                </Link>

                                <Link
                                    to="/contact"
                                    className={`flex items-center rounded-lg p-2 transition-all duration-200 ${isActive('/contact')
                                        ? 'text-orange-500 font-medium'
                                        : 'text-gray-600 hover:text-orange-500'
                                        }`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Contact Us
                                </Link>

                                <Link
                                    to="/blog"
                                    className={`flex items-center rounded-lg p-2 transition-all duration-200 ${isActive('/blog')
                                        ? 'text-orange-500 font-medium'
                                        : 'text-gray-600 hover:text-orange-500'
                                        }`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                    </svg>
                                    Blog
                                </Link>

                                <Link
                                    to="/faqs"
                                    className={`flex items-center rounded-lg p-2 transition-all duration-200 ${isActive('/faqs')
                                        ? 'text-orange-500 font-medium'
                                        : 'text-gray-600 hover:text-orange-500'
                                        }`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    FAQs
                                </Link>
                            </div>
                        </div>
                    )}
                </header>
            </div>

        </div>
    );
};

export default Header;