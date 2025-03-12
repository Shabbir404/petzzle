import { useState } from "react";
import { TfiLayoutLineSolid } from "react-icons/tfi";


const Shop = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const [viweOpen, SetViweOpen] = useState(false)

    const handleViweOpen = () => {
        SetViweOpen(!viweOpen)
    }
    const [viweOpenHi, SetViweOpenHi] = useState(false)

    const handleViweOpenHi = () => {
        SetViweOpenHi(!viweOpenHi)
    }
    const [viweOpenCol, SetViweOpenCol] = useState(false)

    const handleViweOpenCol = () => {
        SetViweOpenCol(!viweOpenCol)
    }

    return (
        <div>
            <div className="md:mt-30 mt-16">
                <div className="bg-[#F5F5F5] h-[140px]">
                    <h1 className="pt-8 font-semibold text-center">
                        <a className="hover:text-orange-600" href="/home">Home</a> /
                        <a className="hover:text-orange-600" href="/shop"> Shop</a> /
                        <a className="hover:text-orange-600" href="/pet-clothes"> Pet Clothes</a> /
                        <a className="hover:text-orange-600" href="/cold-weather-coats"> Cold Weather Coats</a>
                    </h1>
                    <h1 className="text-center mt-4 text-4xl font-extrabold">
                        Cold Weather Coats
                    </h1>
                </div>

                <div className="">
                    <div className="flex w-11/12 md:w-10/12 mx-auto">
                        <div className="relative lg:w-3/12">
                            {/* Mobile filter button */}
                            <button
                                className="md:hidden mt-3 flex items-center px-4 py-2 bg-[#FA6C41] text-white rounded mb-4"
                                onClick={toggleSidebar}
                            >
                                <span>Filters</span>
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            </button>

                            <div className={`bg-white p-4 rounded  ${isOpen ? 'block' : 'hidden'} md:block`}>
                                <div className="mb-6 border p-5 border-[#E5E5E5] rounded-md">
                                    <h3 className="font-bold text-gray-800 flex border-b p-2 border-[#E5E5E5]  justify-between mb-2">Filter By Categories
                                        <TfiLayoutLineSolid onClick={handleViweOpen} className={`${viweOpen ? 'rotate-120' : ''} cursor-pointer text-xl text-gray-900`}></TfiLayoutLineSolid>
                                    </h3>
                                    <ul className={`space-y-1 ${viweOpen ? 'hidden' : ''}`}>
                                        <li className="flex items-center cursor-pointer text-gray-600 hover:text-[#FA6C41]">
                                            <input type="checkbox" id="store" className="mr-2" />
                                            <label htmlFor="store">Our Store</label>
                                        </li>
                                        <li className="flex items-center cursor-pointer text-gray-600 hover:text-[#FA6C41]">
                                            <input type="checkbox" id="desktop-laptop" className="mr-2" />
                                            <label htmlFor="desktop-laptop">Desktop & Laptop</label>
                                        </li>
                                        <li className="flex items-center cursor-pointer text-gray-600 hover:text-[#FA6C41]">
                                            <input type="checkbox" id="digital-pens" className="mr-2" />
                                            <label htmlFor="digital-pens">Digital Pens</label>
                                        </li>
                                        <li className="flex items-center cursor-pointer text-gray-600 hover:text-[#FA6C41]">
                                            <input type="checkbox" id="pet-beds-chairs" className="mr-2" />
                                            <label htmlFor="pet-beds-chairs">Pet Beds & Chairs</label>
                                        </li>
                                        <li className="flex items-center cursor-pointer text-gray-600 hover:text-[#FA6C41]">
                                            <input type="checkbox" id="pet-clothes" className="mr-2" />
                                            <label htmlFor="pet-clothes">Pet Clothes</label>
                                        </li>
                                        <li className="flex items-center cursor-pointer text-gray-600 hover:text-[#FA6C41]">
                                            <input type="checkbox" id="pet-food-bowls" className="mr-2" />
                                            <label htmlFor="pet-food-bowls">Pet Food Bowls</label>
                                        </li>
                                        <li className="flex items-center cursor-pointer text-gray-600 hover:text-[#FA6C41]">
                                            <input type="checkbox" id="pet-supplies" className="mr-2" />
                                            <label htmlFor="pet-supplies">Pet Supplies</label>
                                        </li>
                                    </ul>

                                </div>

                                {/* Highlight */}
                                <div className="mb-6 border p-5 border-[#E5E5E5] rounded-md">
                                    <h3 className="flex justify-between border-b p-2 border-[#E5E5E5] font-bold text-gray-800 mb-2">Highlight
                                        <TfiLayoutLineSolid onClick={handleViweOpenHi} className={` ${viweOpenHi ? 'rotate-120' : ''} cursor-pointer text-xl text-gray-900`}></TfiLayoutLineSolid>
                                    </h3>
                                    <ul className={`space-y-1 ${viweOpenHi ? 'hidden' : ''}`}>
                                        <li className="cursor-pointer text-[#FA6C41] hover:text-red-700">Discounted</li>
                                        <li className="cursor-pointer text-gray-600 hover:text-[#FA6C41]">Best Seller</li>
                                        <li className="cursor-pointer text-gray-600 hover:text-[#FA6C41]">New Arrivals</li>
                                        <li className="cursor-pointer text-gray-600 hover:text-[#FA6C41]">Sale</li>
                                        <li className="cursor-pointer text-gray-600 hover:text-[#FA6C41]">Hot Items</li>
                                    </ul>
                                </div>

                                {/* Filter By Color */}
                                <div className="mb-6 border p-5 border-[#E5E5E5] rounded-md">
                                    <h3 className="font-bold flex justify-between text-gray-800 mb-2">Filter By Color
                                        <TfiLayoutLineSolid onClick={handleViweOpenCol} className={` ${viweOpenCol ? 'rotate-120' : ''} cursor-pointer text-xl text-gray-900`}></TfiLayoutLineSolid>

                                    </h3>
                                    <div className={` ${viweOpenCol ? 'hidden' : ''} flex space-x-2`}>
                                        <div className="w-6 h-6 rounded-full bg-red-500 cursor-pointer"></div>
                                        <div className="w-6 h-6 rounded-full bg-blue-500 cursor-pointer"></div>
                                    </div>
                                </div>

                                {/* Brands */}
                                <div className="mb-6 border p-5 border-[#E5E5E5] rounded-md">
                                    <h3 className="font-bold text-gray-800 mb-2">Brands</h3>
                                    <ul className="space-y-1">
                                        <li className="cursor-pointer text-gray-600 hover:text-[#FA6C41]">Carity (+)</li>
                                        <li className="cursor-pointer text-gray-600 hover:text-[#FA6C41]">Tarnary (+)</li>
                                        <li className="cursor-pointer text-gray-600 hover:text-[#FA6C41]">Blossom (+)</li>
                                    </ul>
                                </div>

                                {/* Filter By Weight */}
                                <div className="mb-6 border p-5 border-[#E5E5E5] rounded-md">
                                    <h3 className="font-bold text-gray-800 mb-2">Filter By Weight</h3>
                                    <ul className="space-y-1">
                                        <li className="cursor-pointer text-gray-600 hover:text-[#FA6C41]">250g</li>
                                        <li className="cursor-pointer text-gray-600 hover:text-[#FA6C41]">500g</li>
                                        <li className="cursor-pointer text-gray-600 hover:text-[#FA6C41]">1kg</li>
                                    </ul>
                                </div>

                                {/* Price Filter */}
                                <div className="mb-6 border p-5 border-[#E5E5E5] rounded-md">
                                    <h3 className="font-bold text-gray-800 mb-2">Price Filter</h3>
                                    <ul className="space-y-1">
                                        <li className="cursor-pointer text-gray-600 hover:text-[#FA6C41]">$10-$20</li>
                                        <li className="cursor-pointer text-gray-600 hover:text-[#FA6C41]">$20-$30</li>
                                        <li className="cursor-pointer text-gray-600 hover:text-[#FA6C41]">$30-$40</li>
                                        <li className="cursor-pointer text-gray-600 hover:text-[#FA6C41]">$40+</li>
                                        <li className="cursor-pointer text-gray-600 hover:text-[#FA6C41]">all</li>
                                    </ul>
                                </div>

                                {/* Average Rating */}
                                <div className="mb-6 border p-5 border-[#E5E5E5] rounded-md">
                                    <h3 className="font-bold text-gray-800 mb-2">Average Rating</h3>
                                    <ul className="space-y-1">
                                        <li className="flex items-center">
                                            <div className="flex text-yellow-400">
                                                <span>★★★★★</span>
                                            </div>
                                            <span className="ml-1 text-gray-600">(5)</span>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="flex text-yellow-400">
                                                <span>★★★★</span><span className="text-gray-300">★</span>
                                            </div>
                                            <span className="ml-1 text-gray-600">(8)</span>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="flex text-yellow-400">
                                                <span>★★★</span><span className="text-gray-300">★★</span>
                                            </div>
                                            <span className="ml-1 text-gray-600">(10)</span>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="flex text-yellow-400">
                                                <span>★★</span><span className="text-gray-300">★★★</span>
                                            </div>
                                            <span className="ml-1 text-gray-600">(0)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 w-7/12">
                            <h1>working</h1>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default Shop;