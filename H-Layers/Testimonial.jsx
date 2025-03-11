import bgR from '../src/images/bgR.png'
import loremImg from '../src/images/lorem.png'
import austria from '../src/images/austria.png'
import logoOne from '../src/logo_co/logoOne.png'
import logoTwo from '../src/logo_co/logoTwo.png'
import logoThree from '../src/logo_co/logoThree.png'
import logoFour from '../src/logo_co/logoFour.png'
import logoFive from '../src/logo_co/logoFive.png'
import Blog from './Blog'


const Testimonial = () => {
    return (
        <div>
            <div>
                <div className='mb-16'>
                    <h1 className='text-center text-[#FA6C41] text-2xl italic font-bold'> Our Testimonial</h1>
                    <h1 className='text-center mt-4 text-4xl font-extralight'>Our Client’s Feedback</h1>
                </div>
                <div className="reletive bg-[#FAF2F0]  ">
                    <div className='absolute  right-0 left-0'>
                        <div className=" w-full">
                            <div className="max-w-6xl mx-auto px-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* First Testimonial */}
                                    <div className="bg-gray-50 p-6  lg:shadow-none shadow-lg  flex flex-col md:flex-row items-start gap-6">
                                        <div className="flex-shrink-0">
                                            <img
                                                src={loremImg}
                                                alt="Lawrence L. Nones"
                                                className="w-16 h-16 rounded-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-gray-500  font-extralight mb-2">"Reliable Product, Consistently Delivers."</h3>
                                            <p className="text-gray-700 text-sm mb-4">
                                                It is a long established fact To the treader will readable
                                                content of a to page when looking a its layout the point
                                                desktop publishing readable english.
                                            </p>
                                            <p className="text-gray-700 font-medium ">Lawrence L. Nones</p>
                                        </div>
                                    </div>

                                    {/* Second Testimonial */}
                                    <div className="bg-gray-50 p-6 lg:shadow-none shadow-lg rounded-lg flex flex-col md:flex-row items-start gap-6">
                                        <div className="flex-shrink-0">
                                            <img
                                                src={austria}
                                                alt="Augusta Wind"
                                                className="w-16 h-16 rounded-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-gray-500  font-extralight mb-2">"Excellent Product. A+ Customer Service."</h3>
                                            <p className="text-gray-700 text-sm mb-4">
                                                It is a long established fact To the treader will readable
                                                content of a to page when looking a its layout the point
                                                desktop publishing readable english.
                                            </p>
                                            <p className="text-gray-700 font-medium">Augusta Wind</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={bgR} alt="" />
                    <div className='mt-38 sm:mt-10 md:mt-0'>
                        <div className='grid md:pt-0 pt-90 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 
                    gap-8 sm:gap-10 md:gap-12 lg:gap-16 w-11/12 sm:w-10/12 mx-auto 
                    py-8 lg:-mt-30 left-0 right-0'>
                            <div className='flex justify-center items-center'>
                                <img className='h-auto max-h-[121px] w-auto max-w-[190px] object-contain' src={logoOne} alt="Partner Logo 1" />
                            </div>
                            <div className='flex justify-center items-center'>
                                <img className='h-auto max-h-[121px] w-auto max-w-[190px] object-contain' src={logoTwo} alt="Partner Logo 2" />
                            </div>
                            <div className='flex justify-center items-center'>
                                <img className='h-auto max-h-[121px] w-auto max-w-[190px] object-contain' src={logoThree} alt="Partner Logo 3" />
                            </div>
                            <div className='flex justify-center items-center'>
                                <img className='h-auto max-h-[121px] w-auto max-w-[190px] object-contain' src={logoFour} alt="Partner Logo 4" />
                            </div>
                            <div className='flex justify-center items-center'>
                                <img className='h-auto max-h-[121px] w-auto max-w-[190px] object-contain' src={logoFive} alt="Partner Logo 5" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Blog></Blog>
        </div>
    );
};

export default Testimonial;