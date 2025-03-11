import bannerImg from '../src/images/banner.jpeg'
import HFirftLayer from './HFirftLayer';

const HForthLayer = () => {
    return (
        <div>
            <div className="-mt-52 md:mt-20 mb-16">
                <div className='reletive'>
                    <div className='absolute md:w-[445px] right-0 p-2 md:p-0 mt-2 md:mt-16'>
                        <h1 className='text-white italic font-semibold textarea-md md:text-3xl'>Summer Sale!</h1>
                        <h1 className='md:text-4xl text-white font-extralight mt-3 hidden md:block'>
                            Carniwel with Ocean
                            Cat Food, Adult
                        </h1>
                        <button className='bg-white md:w-38 rounded-full btn text-black
                         hover:bg-gray-300 md:mt-5'>Shop now</button>
                    </div>
                    <img className='w-full' src={bannerImg} alt="" />
                </div>
            </div>

            <HFirftLayer></HFirftLayer>
        </div>
    );
};

export default HForthLayer;