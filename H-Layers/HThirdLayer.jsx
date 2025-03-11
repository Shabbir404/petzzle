import { useEffect, useState } from 'react';
import bgR from '../src/images/bgR.png'
import catDogImg from '../src/images/cat&dog.jpeg'
import HForthLayer from './HForthLayer';

const HThirdLayer = () => {

    const [allProducts, setAllProfucts] = useState([]);
    const [Products, setProducts] = useState([])

    useEffect(() => {

        fetch('https://raw.githubusercontent.com/Shabbir404/petzzle/refs/heads/main/Jsons/All_profuct.json')
            .then(res => res.json())
            .then(data => setAllProfucts(data)
            )

    }, [])


    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Shabbir404/petzzle/refs/heads/main/Jsons/Product.json')
            .then(res => res.json())
            .then(data => setProducts(data)
            )
    }, [])

    return (
        <div>
            <div>
                <div>
                    <div className='flex justify-center'>
                        <div className=''>
                            <p className='font-bold italic text-center mt-10 text-[#FA6C41]'>Top Categories</p>
                            <h1 className='text-3xl font-light mt-2'>Shop By Categories</h1>
                        </div>
                    </div>
                    <div className='reletive mb-60 mt-14 bg-[#FAF2F0] h-[300px] md:h-[470px]'>
                        <div className='absolute left-0 right-0 md:w-10/12 mx-auto p-2
                         flex gap-6  mt-8 md:mt-10 overflow-x-auto
                          md:overflow-visible  w-full'>
                            {
                                allProducts.map((product, i) => (
                                    <div key={i} className='flex-shrink-0 w-32 md:w-auto'>
                                        <img src={product.image} alt="" />
                                        <h1 className='font-bold text-center mt-4'>{product.title}</h1>
                                        <h1 className='font-medium text-center mt-2'>{product.quantity} products</h1>
                                    </div>
                                ))
                            }

                        </div>
                        <img src={bgR} alt="" />
                        <div className='hidden md:block'>
                            <div className='ml-36 absolute -mt-32'>
                                <p className='font-bold italic text-start mt-10 text-[#FA6C41]'>Best Products</p>
                                <h1 className='text-4xl font-light mt-2'>Featured Products</h1>
                            </div>
                        </div>
                    </div>

                    <div className='-mt-40 hidden md:block mb-10'>
                        <div className='w-10/12 flex mx-auto'>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2
                             gap-4 md:gap-10  mb-10 mx-auto px-4">

                                {Products.slice(0, 4).map((product, i) => (
                                    <div key={i} className="hover:scale-105 duration-200 cursor-pointer">

                                        {/* Title */}
                                        <h1 className="w-[222px] font-semibold mt-4 text-center md:text-start text-lg">{product.title}</h1>

                                        {/* Price */}
                                        <div className="mt-4 text-center md:text-start">
                                            <span className="text-[#FA6C41]">{product.price}</span>
                                        </div>
                                    </div>
                                ))}

                            </div>
                            <div className='-mt-36'>
                                <img src={catDogImg} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <HForthLayer></HForthLayer>
            </div>
        </div>
    );
};

export default HThirdLayer;