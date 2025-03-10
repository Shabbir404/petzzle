import React, { useState } from 'react';
import logo from '../src/assets/logo.svg'
import { IoIosSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div>
                <header className="">
                    {/* Promo  */}
                    <div className="bg-[#FA6C41] hidden md:block text-white py-2 px-4  text-sm">
                        <div className='flex justify-between w-10/12 mx-auto'>
                            <div className=''>
                                <p className='mt-2'>Get 15% Discount + FREE surprise gift on your first order</p>
                            </div>

                            {/* Top navigation */}
                            <div className='hidden  md:block '>
                                <div className=" py-2 px-4 text-sm space-x-6">
                                    <a href="#about" className="hover:underline transition-colors duration-200">About Us</a>
                                    <a href="#contact" className="hover:underline transition-colors duration-200">Contact Us</a>
                                    <a href="#blog" className="hover:underline transition-colors duration-200">Blog</a>
                                    <a href="#faqs" className="hover:underline transition-colors duration-200">FAQs</a>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* desktop navigation */}
                    <div className="bg-white  shadow-md">
                        <div className=' md:w-10/12 mx-auto px-4 py-3 flex items-center justify-between'>
                            {/* Logo */}
                            <div className="flex items-center">
                                <div className="mr-2">
                                    <img
                                        src={logo}
                                        alt="Petzzle Logo"
                                        className=" w-[162px] h-[45px]"
                                    />
                                </div>
                            </div>

                            {/* Desktop Navigation */}
                            <nav className="hidden md:flex items-center space-x-8">
                                <a href="#home" className="text-orange-500 font-bold hover:text-orange-700 transition-colors duration-200">Home</a>
                                <a href="#shop" className="font-bold hover:text-orange-500 transition-colors duration-200">Shop</a>
                                <div className="relative group">
                                    <a href="#categories" className="font-bold flex items-center hover:text-orange-500 transition-colors duration-200">
                                        Categories
                                        <span className="bg-[#199588] text-white text-xs ml-1 px-1 rounded">SALE</span>
                                    </a>

                                </div>
                                <div className="relative group">
                                    <a href="#products" className="font-bold flex items-center hover:text-orange-500 transition-colors duration-200">
                                        Products
                                        <span className="bg-[#E62A65] text-white text-xs ml-1 px-1 rounded">HOT</span>
                                    </a>
                                </div>
                                <a href="#deals" className="font-bold hover:text-orange-500 transition-colors duration-200">Top deals</a>
                                <a href="#elements" className="font-bold hover:text-orange-500 transition-colors duration-200">Elements</a>
                            </nav>

                            {/* Right Section - Search, Account, Favorites, Cart */}
                            <div className="flex items-center space-x-4">
                                {/* Search */}
                                <button className="hover:text-orange-500 transition-colors duration-200">
                                    <IoIosSearch className='text-2xl'></IoIosSearch>
                                </button>

                                {/* Account */}
                                <button className="hover:text-orange-500 transition-colors duration-200 ">
                                    <IoPersonOutline className='text-2xl'></IoPersonOutline>
                                </button>

                                {/* Favorites */}
                                <button className="relative hover:text-orange-500 transition-colors duration-200 hidden md:block">
                                    <CiHeart className='text-3xl mt-0.5'></CiHeart>
                                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                                </button>

                                {/* Cart */}
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
                            <div className="px-4 py-2 space-y-3">
                                <a href="#home" className="block text-orange-500 font-bold hover:bg-gray-50 rounded p-2 transition-colors duration-200">Home</a>
                                <a href="#shop" className="block font-bold hover:bg-gray-50 hover:text-orange-500 rounded p-2 transition-colors duration-200">Shop</a>
                                <a href="#categories" className="block font-bold hover:bg-gray-50 hover:text-orange-500 rounded p-2 transition-colors duration-200">
                                    Categories
                                    <span className="bg-[#199588] text-white text-xs ml-1 px-1 rounded">SALE</span>
                                </a>
                                <a href="#products" className="block font-bold hover:bg-gray-50 hover:text-orange-500 rounded p-2 transition-colors duration-200">
                                    Products
                                    <span className="bg-[#E62A65] text-white text-xs ml-1 px-1 rounded">HOT</span>
                                </a>
                                <a href="#deals" className="block font-bold hover:bg-gray-50 hover:text-orange-500 rounded p-2 transition-colors duration-200">Top deals</a>
                                <a href="#elements" className="block font-bold hover:bg-gray-50 hover:text-orange-500 rounded p-2 transition-colors duration-200">Elements</a>
                            </div>
                            <div className="border-t px-4 py-2 space-y-3">
                                <a href="#about" className="block hover:bg-gray-50 hover:text-orange-500 rounded p-2 transition-colors duration-200">About Us</a>
                                <a href="#contact" className="block hover:bg-gray-50 hover:text-orange-500 rounded p-2 transition-colors duration-200">Contact Us</a>
                                <a href="#blog" className="block hover:bg-gray-50 hover:text-orange-500 rounded p-2 transition-colors duration-200">Blog</a>
                                <a href="#faqs" className="block hover:bg-gray-50 hover:text-orange-500 rounded p-2 transition-colors duration-200">FAQs</a>
                            </div>
                        </div>
                    )}
                </header>
            </div>

        </div>
    );
};

export default Header;