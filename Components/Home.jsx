import offericon from '../src/assets/offer.svg'
import '../src/style.css'
import { IoIosArrowRoundForward } from "react-icons/io";
import dogImg from '../src/images/Adobe Express - file.png'
import petImg from '../src/images/pet.jpeg'
import { TiTick } from "react-icons/ti";
import HSecondLayer from '../H-Layers/HSecondLayer';

const Home = () => {
    return (
        <div>
            <div className='mt-20 md:mt-38 md:w-10/12 w-full mx-auto'>
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

                <div className='mt-3 md:mt-6 md:flex gap-10'>
                    <div>
                        <img className='md:rounded-xl' src={petImg} alt="" />
                    </div>
                    <div className=' '>
                        <div className="max-w-3xl mx-auto px-6 py-10 ">
                            <div className=' md:w-[550px]'>
                                <div className="text-[#FA6C41] italic text-xl font-light mb-2">
                                    Your Pet Will Love
                                </div>

                                <div className=''>
                                    <h1 className="text-4xl font-light text-gray-800 mb-1">
                                        The Journey To Our Meowzy
                                    </h1>
                                    <h2 className="text-4xl font-light text-gray-800 mb-4">
                                        A Passion For Pets
                                    </h2>
                                </div>

                                <p className="text-[#150B33] mb-4 md:mb-6">
                                    Welcome to Meowzy! Our mission is to provide top-notch care and
                                    services for your grooming to boarding we ensure every pet feels
                                    loved, safe, and happy trust us with your furry family members.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 ">
                                <div className="flex items-start">
                                    <TiTick className="flex-shrink-0 h-5 w-5 text-white rounded-full bg-orange-500 mt-1 mr-3"></TiTick>
                                    <p className="text-gray-700">Over 10 years of experience</p>
                                </div>

                                <div className="flex items-start">
                                    <TiTick className="flex-shrink-0 h-5 w-5 text-white rounded-full bg-orange-500 mt-1 mr-3"></TiTick>
                                    <p className="text-gray-700">Exercise and Mental Stimulation</p>
                                </div>

                                <div className="flex items-start">
                                    <TiTick className="flex-shrink-0 h-5 w-5 text-white rounded-full bg-orange-500 mt-1 mr-3"></TiTick>
                                    <p className="text-gray-700">20 talented vets ready to help</p>
                                </div>

                                <div className="flex items-start">
                                    <TiTick className="flex-shrink-0 h-5 w-5 text-white rounded-full bg-orange-500 mt-1 mr-3"></TiTick>
                                    <p className="text-gray-700">Dental Hygiene Care</p>
                                </div>

                                <div className="flex items-start">
                                    <TiTick className="flex-shrink-0 h-5 text-white w-5 rounded-full bg-orange-500 mt-1 mr-3"></TiTick>
                                    <p className="text-gray-700">High-quality products only</p>
                                </div>

                                <div className="flex items-start">
                                    <TiTick className="flex-shrink-0 text-white h-5 w-5 rounded-full bg-orange-500 mt-1 mr-3"></TiTick>
                                    <p className="text-gray-700">Regular Veterinary Check-ups</p>
                                </div>
                            </div>
                            <button className="bg-[#FA6C41] mt-6 md:mt-8 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full transition duration-300">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <HSecondLayer></HSecondLayer>
            </div>
        </div>
    );
};

export default Home;