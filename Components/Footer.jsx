import { FaFacebookF, FaInstagram, FaPinterest, FaGoogle } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';
import { BsTelephone } from 'react-icons/bs';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import paymentImg from '../src/images/payments.png'

const Footer = () => {
    return (
        <div>
            <footer className="w-full bg-white pt-12 pb-4">
                <div className="w-11/12 md:w-10/12  mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Store Information */}
                        <div>
                            <h3 className="text-gray-700 font-medium text-lg mb-4">Store Information</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <IoLocationOutline className=" text-4xl mt-1" />
                                    <span className="text-sm text-gray-600">
                                        60 29th Street San Francisco, 507-Union Trade Center, United States America - 94110
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <BsTelephone className="" />
                                    <span className="text-sm text-gray-600">(+00) 123-456-7890</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <MdOutlinePhoneIphone className="" />
                                    <span className="text-sm text-gray-600">(+91)-012-345-6789</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <HiOutlineMail className="" />
                                    <span className="text-sm text-gray-600">demo@example.com</span>
                                </li>
                            </ul>
                        </div>

                        {/* Find Product */}
                        <div>
                            <h3 className="text-gray-700 font-medium text-lg mb-4">Find Product</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Order Status</a></li>
                                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Terms Conditions</a></li>
                                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Policy For Sellers</a></li>
                                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Policy For Buyers</a></li>
                                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Shipping & Refund</a></li>
                                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Wholesale Policy</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-gray-700 font-medium text-lg mb-4">Useful Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Product Support</a></li>
                                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Checkout</a></li>
                                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">License Policy</a></li>
                                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Affiliate</a></li>
                                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Locality</a></li>
                                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">Order Tracking</a></li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h3 className="text-gray-700 font-medium text-lg mb-4">Our Newsletter</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Subscribe to our latest newsletter to get news about special discounts.
                            </p>
                            <div className="flex flex-col gap-3">
                                <div className='bg-[#F5F5F5] rounded-full'>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="px-4 py-2   focus:outline-none "
                                    />
                                </div>
                                <button className="bg-[#FF7043] text-white w-[133px] h-[50px] rounded-full font-medium hover:bg-[#F4511E] transition-colors duration-200">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-200 my-8"></div>

                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex space-x-4 mb-4 md:mb-0">
                            <a href="#" className="text-gray-600 hover:text-gray-800">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-800">
                                <FaXTwitter />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-800">
                                <FaInstagram />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-800">
                                <FaPinterest />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-800">
                                <FaGoogle />
                            </a>
                        </div>

                        <div className="text-sm text-gray-600 mb-4 md:mb-0">
                            Copyright 2023 © Petzbd. All right reserved. Powered by BlackHive Themes
                        </div>

                        <div>
                            <img src={paymentImg} alt="" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;