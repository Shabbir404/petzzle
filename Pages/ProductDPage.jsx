import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoShieldHalf } from "react-icons/io5";
import { FaCoins } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { FaFire } from "react-icons/fa6";
import { AiOutlineAlignRight } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { BsShieldFillCheck } from "react-icons/bs";
import paymentPGN from '../src/images/payments.png'
import AProduct from "./AProduct";


const ProductDPage = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        if (!id) return;

        fetch('https://raw.githubusercontent.com/Shabbir404/petzzle/refs/heads/main/Jsons/LatestProducts.json')
            .then(res => res.json())
            .then(data => {
                const matchingProduct = data.find(item => String(item.id) === id);
                setProduct(matchingProduct);
            })
            .catch((error) => {
                console.log("Error fetching data:", error);
            });
    }, [id]);  // Dependency on id, so it re-fetches when id changes


    const [quantity, setQuantity] = useState(1);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };


    return (
        <div>

            {product ? (
                <div className="md:mt-30 mt-16">
                    <div className="bg-[#F5F5F5] h-[140px]">
                        <h1 className="pt-12 font-semibold text-center">
                            <a className="hover:text-orange-600" href="/home">Home</a> /
                            <a className="hover:text-orange-600" href="/shop"> Shop</a> /
                            <a className="hover:text-orange-600" href="/pet-clothes"> Pet Clothes</a> /
                            <a className="hover:text-orange-600" href="/cold-weather-coats"> Toys</a>
                            <a className="hover:text-orange-600" href="/cold-weather-coats"> / Pedigree Adult Dry Dog Food, 1kg Pack</a>
                        </h1>
                    </div>
                    <div className="w-11/12 md:w-10/12 mx-auto mt-10 md:flex gap-4" >

                        <div className="md:flex gap-4">
                            <div className="hidden md:block md:flex flex-col mt-11 gap-4">
                                <div className="w-30 h-30 rounded-xs bg-[#c7c6c6]">

                                </div>
                                <div className="w-30 h-30 rounded-xs bg-[#c7c6c6]">

                                </div>
                                <div className="w-30 h-30 rounded-xs bg-[#c7c6c6]">
                                </div>
                            </div>

                            <div className="">
                                <img className="rounded-xs w-[400px] h-[400px] md:w-[500px] md:h-[500px]" src={product.image} alt="" />

                                <div className="justify-center md:hidden flex mt-6 gap-4">
                                    <div className="w-26 h-26 rounded-xs bg-[#c7c6c6]">

                                    </div>
                                    <div className="w-26 h-26 rounded-xs bg-[#c7c6c6]">

                                    </div>
                                    <div className="w-26 h-26 rounded-xs bg-[#c7c6c6]">
                                    </div>
                                </div>

                                <div className="flex mt-10 h-20 md:w-[500px] md:h-[40px]">
                                    <div className="flex border-r border-[#DEE3F2] gap-2 bg-[#F3F4FC] text-[#47486F] px-4 py-2">
                                        <IoShieldHalf className="text-xl md:mt-0 mt-5"></IoShieldHalf>
                                        <h1 className=" font-medium">101% Original</h1>
                                    </div>
                                    <div className="flex gap-2  border-r border-[#DEE3F2] bg-[#F3F4FC] text-[#47486F] px-4 py-2">
                                        <FaCoins className=" md:mt-0 mt-5 "></FaCoins>
                                        <h1 className=" font-medium">Lowest Price</h1>
                                    </div>
                                    <div className="flex gap-2  bg-[#F3F4FC] text-[#47486F] px-4 py-2">
                                        <FaShippingFast className="md:mt-0 mt-5  "></FaShippingFast>
                                        <h1 className=" font-medium">Free Shipping</h1>
                                    </div>
                                </div>
                            </div>



                        </div>

                        <div className=" p-4">
                            <div className="text-sm  mb-1">Brand: <span className="text-[#FA6C41]">Cirtify</span></div>
                            <h1 className="text-xl mt-2 md:mt-6 mb-4 md:font-bold font-semibold mb-2">{product.title}</h1>

                            <div className="flex md:justify-start justify-between gap-26">
                                <div className="text-lg font-extrabold text-[#FA6C41] mb-2">
                                    ${product.priceRange?.min} – ${product.priceRange?.max}
                                </div>

                                <Link className="text-sm text-[#FA6C41] mt-1 mb-2">
                                    ({product.reviewCount} {product.reviewCount === 1 ? 'review' : 'reviews'})
                                </Link>
                            </div>
                            <h1 className="mt-4 mb-6 flex tracking-wider text-[#DA3F3F] font-semibold gap-2">
                                <FaFire className="text-xl text-[#FA6C41]"></FaFire>
                                {product.soldCount} products sold in last 7 hours</h1>


                            <p className="text-gray-700 mb-6">{product.description}</p>

                            <div className="mb-4">
                                <div className="font-semibold mb-2">Weight</div>
                                <div className="flex gap-2 mb-2">
                                    {product.weightOptions?.map((option) => (
                                        <button
                                            key={option}
                                            className={`px-4 py-2 border rounded-md ${option === product.selectedWeight
                                                ? 'border-orange-500 text-[#FA6C41]'
                                                : 'border-gray-300'
                                                }`}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                                <button className="flex items-center text-sm text-gray-500">
                                    <span className="mr-1">×</span>
                                    Clear
                                </button>
                            </div>

                            {/* Price */}
                            <div className="text-xl font-bold mb-2">${product.price}</div>

                            {/* Stock */}
                            <div className="bg-green-100 text-green-800 py-1 px-2 rounded-sm inline-block text-sm mb-4">
                                {product.stock} in stock
                            </div>

                            {/* Quantity selector */}
                            <div className="flex gap-10 items-center mb-4">
                                <div className="w-[102px] flex gap-2 bg-[#f5f5f5]  ">
                                    <button
                                        onClick={decreaseQuantity}
                                        className="w-10 h-10 flex items-center cursor-pointer hover:text-[#FA6C41] justify-center rounded-l-md"
                                    >
                                        −
                                    </button>
                                    <input
                                        type="text"
                                        value={quantity}
                                        onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                                        className="w-12 h-10 text-center "
                                    />
                                    <button
                                        onClick={increaseQuantity}
                                        className="w-10 h-10 flex items-center cursor-pointer hover:text-[#FA6C41] justify-center srounded-r-md"
                                    >
                                        +
                                    </button>
                                </div>

                                {/* Add to cart button */}
                                <button className="w-7/10 bg-[#FA6C41] hover:bg-orange-600 text-white cursor-pointer py-3 rounded-full mb-2">
                                    Add To Cart
                                </button>
                            </div>

                            {/* Buy now button */}
                            <button className="w-full bg-[#150B33] cursor-pointer hover:bg-[#150b33c4] text-white py-3 rounded-full mb-4">
                                Buy Now
                            </button>

                            {/* Action buttons */}
                            <div className="flex gap-4 md:gap-6 mt-2 mb-4 md:text-xl ">
                                <button className="cursor-pointer hover:text-[#FA6C41] flex gap-2 items-center">
                                    <AiOutlineAlignRight className=" "></AiOutlineAlignRight>
                                    Compare
                                </button>
                                <button className=" cursor-pointer hover:text-[#FA6C41] flex gap-2 items-center">
                                    <FaRegHeart></FaRegHeart>
                                    Wishlist
                                </button>
                                <button className="cursor-pointer hover:text-[#FA6C41] flex  gap-2 items-center">
                                    <FaRegQuestionCircle></FaRegQuestionCircle>
                                    Ask Us
                                </button>
                                <button className="cursor-pointer hover:text-[#FA6C41] flex gap-2 items-center">
                                    <FiShare2></FiShare2>
                                    Share
                                </button>
                            </div>

                            {/* Viewers count */}
                            <div className="flex items-center mt-4 text-sm tracking-wide font-semibold">
                                <span className="mr-2">👁</span>
                                {product.viewerCount} people are viewing this right now
                            </div>

                            {/* Delivery info */}
                            <div className="mt-4 font-semibold tracking-wide">
                                <div className="flex gap-2 items-center mb-2 text-sm">
                                    <BsShieldFillCheck></BsShieldFillCheck>
                                    Estimated Delivery : Up to {product.deliveryDays} business days
                                </div>
                                <div className="flex gap-2 items-center text-sm">
                                    <BsShieldFillCheck></BsShieldFillCheck>
                                    Free Shipping & Returns : On all orders over ${product.freeShippingThreshold}
                                </div>
                            </div>

                            <div className="bg-[#F5F5F5] hidden md:block  h-[94px]">
                                <h1 className="font-semibold tracking-wide text-center pt-5">Guaranteed Safe And Secure Checkout</h1>
                                <img className="h-[30px] mt-2 bottom-0 w-6/12 mx-auto" src={paymentPGN} alt="" />
                            </div>
                        </div>

                    </div>
                    {/* about product components*/}

                    <AProduct></AProduct>

                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ProductDPage;
