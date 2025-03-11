import blogOneImg from '../src/images/blogOne.jpeg'
import blogTwoImg from '../src/images/blogTwo.jpeg'
import blogThreeImg from '../src/images/blogThree.jpeg'
import { GoDotFill } from "react-icons/go";
import InfoBox from './InfoBox';


const Blog = () => {
    return (
        <div>
            <div className="mt-20">
                <h1 className='text-center text-[#FA6C41] text-2xl italic font-bold'>From The Blog</h1>
                <h1 className='text-center mt-4 text-4xl font-extralight'>Our Latest Blog</h1>
            </div>
            <div className='mt-8 mb-20 w-11/12 md:w-10/12 mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className=''>
                    <img className='w-[433px] h-[284.75] rounded-sm' src={blogOneImg} alt="" />
                    <h1 className='text-[#FA6C41] font-bold mt-2 flex gap-1'>March 11, 2025
                        <GoDotFill className='mt-1.5 text-xs'></GoDotFill> by Editor
                    </h1>
                    <h1 className='text-gray-500 mt-2'>
                        How to Write a Blog Post Your Readers Will…
                    </h1>
                    <h1 className='mt-2 font-semibold '>
                        Why the world would end without travel coupons. The
                        16 worst songs about spa deals.…
                    </h1>
                    <button className='font-bold cursor-pointer hover:text-gray-500 underline mt-2'>Read more..</button>
                </div>
                <div className=''>
                    <img className='w-[433px] h-[284.75] rounded-sm' src={blogTwoImg} alt="" />
                    <h1 className='text-[#FA6C41] font-bold mt-2 flex gap-1'>March 5, 2025
                        <GoDotFill className='mt-1.5 text-xs'></GoDotFill> by Editor
                    </h1>
                    <h1 className='text-gray-500 mt-2'>
                        9 Content Marketing Trends and Ideas to…
                    </h1>
                    <h1 className='mt-2 font-semibold '>
                        Why do people think wholesale accessories are a good
                        idea? Unbelievable cool tech gadget success…
                    </h1>
                    <button className='font-bold cursor-pointer hover:text-gray-500 underline mt-2'>Read more..</button>
                </div>
                <div className=''>
                    <img className='w-[433px] h-[284.75] rounded-sm' src={blogThreeImg} alt="" />
                    <h1 className='text-[#FA6C41] font-bold mt-2 flex gap-1'>March 1, 2025
                        <GoDotFill className='mt-1.5 text-xs'></GoDotFill> by Editor
                    </h1>
                    <h1 className='text-gray-500 mt-2'>
                        The Ultimate Guide to Marketing Strategies to…
                    </h1>
                    <h1 className='mt-2 font-semibold '>
                        Many things about electronic devices your kids don't
                        want you to know How storage devices…
                    </h1>
                    <button className='font-bold cursor-pointer hover:text-gray-500 underline mt-2'>Read more..</button>
                </div>
            </div>
            <InfoBox></InfoBox>
        </div>
    );
};

export default Blog;