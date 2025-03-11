import picOne from '../src/images/dogPlate.jpeg'
import picTwo from '../src/images/strip.jpeg'
import picThree from '../src/images/clothes.jpeg'
import picFour from '../src/images/multiplate.jpeg'
import picFive from '../src/images/protine.jpeg'
import Testimonial from './Testimonial'



const HFirftLayer = () => {


    return (
        <div>
            <div className='mb-20'>
                <div className=''>
                    <h1 className='text-center text-[#FA6C41] text-2xl italic font-bold'> Special Products</h1>
                    <h1 className='text-center mt-4 text-4xl font-extralight'> Deal Of The Week </h1>
                </div>
                <div className='mt-10'>
                    <div>
                        <div className="w-10/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                            {/* Card 1 -  */}
                            <div className="md:w-64 md:h-full h-86 hover:scale-105 duration-200 bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="relative">
                                    <img src={picOne} alt="Stainless Steel Dog Bowl" className="w-full object-cover" />
                                    <div className="absolute top-2 left-2 bg-[#FA6C41] text-white text-xs font-bold p-2 rounded-full">
                                        14%
                                    </div>
                                    <div className="absolute bottom-2 left-12 text-xs text-[#DA3F3F] bg-white/80 px-5 py-3 rounded">
                                        644d · 12h · 33m · 26s
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-medium text-sm mb-2">Pets Empire Stainless Steel Dog Bowl (Set Of 2)</h3>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-400 line-through">$37</span>
                                            <span className="text-[#FA6C41]   text-sm">$30</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 -  */}
                            <div className="md:w-64 md:h-full h-86 hover:scale-105 duration-200 bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="relative">
                                    <img src={picTwo} alt="Dog Training Lead" className="w-full object-cover" />
                                    <div className="absolute top-2 left-2 bg-[#FA6C41] text-white text-xs font-bold p-2 rounded-full">
                                        12%
                                    </div>
                                    <div className="absolute bottom-2 left-12 text-xs text-[#DA3F3F] bg-white/80 px-5 py-3 rounded">
                                        660d · 12h · 33m · 26s
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-medium text-sm mb-2">Dog/Puppy Obedience Recall Training Agility Lead</h3>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-400 line-through">$25</span>
                                            <span className="text-[#FA6C41]   text-sm">$23</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 - */}
                            <div className="md:w-64 md:h-full h-86 hover:scale-105 duration-200 bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="relative">
                                    <img src={picThree} alt="Dog Christmas Sweater" className="w-full object-cover" />
                                    <div className="absolute top-2 left-2 bg-[#FA6C41] text-white text-xs font-bold p-2 rounded-full">
                                        20%
                                    </div>
                                    <div className="absolute bottom-2 left-12 text-xs text-[#DA3F3F] bg-white/80 px-5 py-3 rounded">
                                        646d · 12h · 33m · 26s
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-medium text-sm mb-2">Maxdii Dog Christmas Sweater Dog Cat Autumn</h3>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-400 line-through">$20</span>
                                            <span className="text-[#FA6C41]   text-sm">$16</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="md:w-64 md:h-full h-86 hover:scale-105 duration-200 bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="relative">
                                    <img src={picFour} alt="Pet Puzzle Toy" className="w-full  object-cover" />
                                    <div className="absolute top-2 left-2 bg-[#FA6C41] text-white text-xs font-bold p-2 rounded-full">
                                        7%
                                    </div>
                                    <div className="absolute bottom-2 left-12 text-xs text-[#DA3F3F] bg-white/80 px-5 py-3 rounded">
                                        659d · 12h · 33m · 26s
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-medium text-sm mb-2">Foodie Puppies Pet Puzzle Toy For Dispensing Treats</h3>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-400 line-through">$29</span>
                                            <span className="text-[#FA6C41]   text-sm">$27</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 5 */}
                            <div className="md:w-64 md:h-full h-80 hover:scale-105 duration-200 bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="relative">
                                    <img src={picFive} alt="Orijen Dog Food" className="w-full  object-cover" />
                                    <div className="absolute top-2 left-2 bg-[#FA6C41] text-white text-xs font-bold p-2 rounded-full">
                                        6%
                                    </div>
                                    <div className="absolute bottom-2 left-10 text-xs text-[#DA3F3F] bg-white/80 px-2 py-1 rounded">

                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-medium text-sm mb-2">Orijen Original Dry Dog Food Of All Life Stages</h3>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#FA6C41]">$18</span>
                                            <span className="text-sm text-[#FA6C41] ">- $34</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* optional */}
                            <div className="md:w-64 lg:hidden md:h-full h-80 hover:scale-105 duration-200 bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="relative">
                                    <img src={picFive} alt="Orijen Dog Food" className="w-full  object-cover" />
                                    <div className="absolute top-2 left-2 bg-[#FA6C41] text-white text-xs font-bold p-2 rounded-full">
                                        6%
                                    </div>
                                    <div className="absolute bottom-2 left-10 text-xs text-[#DA3F3F] bg-white/80 px-2 py-1 rounded">

                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-medium text-sm mb-2">Orijen Original Dry Dog Food Of All Life Stages</h3>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#FA6C41]">$18</span>
                                            <span className="text-sm text-[#FA6C41] ">- $34</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Testimonial></Testimonial>
        </div>
    );
};

export default HFirftLayer;