import dogInHand from '../src/images/dogInHand.jpeg'
import dogEat from '../src/images/dogEat.jpeg'
import HThirdLayer from './HThirdLayer';
import { useEffect, useState } from 'react';

const HSecondLayer = () => {

    const [allProducts, setAllProfucts] = useState([]);

    useEffect(() => {

        fetch('https://raw.githubusercontent.com/Shabbir404/petzzle/refs/heads/main/Jsons/LatestProducts.json')
            .then(res => res.json())
            .then(data => setAllProfucts(data)
            )

    }, [])

    return (
        <div>
            <div className='md:w-10/12 mx-auto w-full'>
                <div className='flex justify-center '>
                    <div className=''>
                        <p className='font-bold italic text-center mt-10 text-[#FA6C41]'>Trending Products</p>
                        <h1 className='text-3xl font-light mt-2'>Latest Products</h1>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-10 mb-10 mx-auto px-4">
                    {allProducts.slice(0, 5).map((product, i) => (
                        <div key={i} className="p-4 w-full max-w-[247.59px] mx-auto hover:scale-105 duration-200 cursor-pointer">
                            {/* Image */}
                            <img
                                src={product.image}
                                alt=""
                                className="w-full h-auto  md:mt-8 object-cover md:rounded-none rounded-md"
                            />

                            {/* Title */}
                            <h1 className="font-semibold mt-4 text-center md:text-start text-lg">{product.title}</h1>

                            {/* Price */}
                            <div className="mt-4 text-center md:text-start md:mt-10">
                                <span className="text-[#FA6C41]">{product.price}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='mb-10'>
                    <div className='md:flex gap-8 '>
                        <div className='reletive'>
                            <div className='absolute mt-4 md:mt-10 ml-10'>
                                <h1 className='font-bold italic'>Exclusive offers!</h1>
                                <h1 className='md:mt-6  font-light w-[200px] text-xl md:text-4xl md:w-[291px]'>We Care & Share
                                    Love For Pets</h1>
                                <button className='btn hover:bg-gray-800 bg-black md:mt-10 mt-3 rounded-full border-0 text-white'>Shop now</button>
                            </div>
                            <img className="" src={dogInHand} alt="" />
                        </div>

                        <div className='md:mt-0 mt-4 reletive'>
                            <div className='absolute mt-4 md:mt-10 ml-10'>
                                <h1 className='font-bold text-white italic'>Summer Sale!</h1>
                                <h1 className='md:mt-6
                                 font-light w-[200px] text-xl 
                                 md:text-4xl md:w-[291px] text-white'>We Care & Share
                                    Love For Pets</h1>
                                <button className='btn hover:bg-gray-300 bg-white
                                 md:mt-10 mt-3 rounded-full border-0 text-black'>Shop now</button>
                            </div>
                            <img className="" src={dogEat} alt="" />
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <HThirdLayer></HThirdLayer>
            </div>
        </div>
    );
};

export default HSecondLayer;