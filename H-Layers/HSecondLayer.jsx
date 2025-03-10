import dogInHand from '../src/images/dogInHand.jpeg'
import dogEat from '../src/images/dogEat.jpeg'

const HSecondLayer = () => {

    const allProducts = [
        {
            image: '../src/images/firstP.jpeg',
            title: 'Pedigree Adult Dry Dog Food, 1kg Pack',
            price: '$12 – $38'
        },
        {
            image: '../src/images/secondP.jpeg',
            title: 'Dentastix Oral Care Treats for Small Breed Adult Dogs',
            price: '$11'
        },
        {
            image: '../src/images/thirdP.jpeg',
            title: 'Meat Up Puppy Dry Dog Food, Chicken',
            price: '$15 – $28'
        },
        {
            image: '../src/images/forthP.jpeg',
            title: 'Pets Empire Stainless Steel Dog Bowl (Set of 2)',
            price: '$30'
        },
        {
            image: '../src/images/fifthP.jpeg',
            title: 'Mutt of Course Sniffing Around Bandana Small',
            price: '$12'
        }
    ];


    return (
        <div>
            <div>
                <div className='flex justify-center'>
                    <div className=''>
                        <p className='font-bold italic text-center mt-10 text-[#FA6C41]'>Trending Products</p>
                        <h1 className='text-3xl font-light mt-2'>Latest Products</h1>
                    </div>
                </div>

                <div className="grid grid-cols-2  md:grid-cols-5  md:gap-10 mb-10">
                    {allProducts.map((product, i) => (
                        <div key={i} className="p-4  w-[247.58999633789062px] hover:scale-105 duration-200 cursor-pointer">
                            {/* Image */}
                            <img src={product.image} alt=""
                                className=" mt-8 object-cover md:rounded-none rounded-md" />

                            {/* Title */}
                            <h1 className="font-semibold mt-4 md:text-start text-center text-lg">{product.title}</h1>

                            {/* Price */}
                            <div className="mt-4 md:text-start md:mt-10 text-center">
                                <span className="text-[#FA6C41]  ">{product.price}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='mb-10'>
                    <div className='md:flex gap-8 '>
                        <div className='reletive'>
                            <div className='absolute mt-10 ml-10'>
                                <h1 className='font-bold italic'>Exclusive offers!</h1>
                                <h1 className='md:mt-6 mt-4 font-light w-[200px] text-xl md:text-4xl md:w-[291px]'>We Care & Share
                                    Love For Pets</h1>
                                <button className='btn hover:bg-gray-800 bg-black md:mt-10 mt-3 rounded-full border-0 text-white'>Shop now</button>
                            </div>
                            <img className="" src={dogInHand} alt="" />
                        </div>

                        <div className='md:mt-0 mt-4 reletive'>
                            <div className='absolute mt-10 ml-10'>
                                <h1 className='font-bold text-white italic'>Summer Sale!</h1>
                                <h1 className='md:mt-6 mt-4
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

                <div>

                </div>

            </div>
        </div>
    );
};

export default HSecondLayer;