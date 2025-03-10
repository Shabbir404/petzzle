import React from 'react';
import offericon from '../src/assets/offer.svg'
import '../src/style.css'
import { IoIosArrowRoundForward } from "react-icons/io";
import dogImg from '../src/images/Adobe Express - file.png'

const Home = () => {
    return (
        <div>
            <div className='md:w-10/12 w-full mx-auto'>
                <div className='md:mt-7 mt-2 md:rounded-xl bg-[#FA6C41] md:h-[508px]'>
                    {/* div have to flex */}
                    <div className='flex flex-col md:flex-row  px-4 md:px-0'>
                        <div className='mx-4 md:ml-14'>
                            <div className='flex gap-2 pt-4 md:pt-24'>
                                <h1 className='text-white font-semibold'>
                                    Exclusive Offer
                                </h1>
                                <img
                                    className='w-[72px] h-[30px]'
                                    src={offericon} alt="Offer icon" />
                            </div>
                            <div className='md:mt-4'>
                                <h1 className='text-xl sm:text-2xl md:text-5xl
                tracking-wide font-semibold
                fira-sans md:w-[485px] text-white'>
                                    Healthy Food, Fresh Water – A Happy Life for Your Pet
                                </h1>
                                <p className='mt-6 tracking-wider font-light text-[#e5e7ed]
                fira-sans'>
                                    Take advantage of discounted prices and special deals...
                                </p>
                                <button className='flex mt-8 gap-2 btn bg-black
                border-0 hover:scale-105 duration-300
                rounded-full text-white'>Shop now
                                    <IoIosArrowRoundForward className='text-2xl'></IoIosArrowRoundForward>
                                </button>
                            </div>
                        </div>
                        <div className='hidden md:block md:ml-30 md:h-[545px]'>
                            <img src={dogImg}
                                className='md:h-[509px]'
                                alt="Dog image" />
                        </div>
                        <div className='block md:hidden self-center'>
                            <img src={dogImg}
                                className='h-[250px] w-auto md:object-contain'
                                alt="Dog image" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;