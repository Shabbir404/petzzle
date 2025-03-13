import { useEffect, useState } from 'react'
import aboutPpng from '../src/images/addP1.jpeg'
import aboutPpng1 from '../src/images/addp2.jpeg'
import aboutPpng2 from '../src/images/addP3.jpeg'
import aboutPpng3 from '../src/images/addP4.jpeg'
import aboutPpng4 from '../src/images/fifthP.jpeg'


const products = [
    {
        name: "Pedigree Adult Dry Dog Food, 1kg Pack",
        image: aboutPpng,
        price: "$12 – $38",
        availability: "422 in stock",
        weight: "0.250 kg",
        additionalWeight: "250g, 500g, 1kg",
        actionType: "select",
        actionText: "Select Options"
    },
    {
        name: "WAGZY Star Theme Printed Winter Sweater Jacket",
        image: aboutPpng1,
        price: "$32 $30",
        availability: "277 in stock",
        weight: "0.250 kg",
        additionalWeight: "",
        actionType: "add",
        actionText: "Add To Cart"
    },
    {
        name: "Prairie Poultry For All Breeds And Life Stages",
        image: aboutPpng2,
        price: "$12 – $23",
        availability: "399 in stock",
        weight: "250g, 500g",
        additionalWeight: "",
        actionType: "select",
        actionText: "Select Options"
    },
    {
        name: "Food-Grade Melamine Base and Stainless Steel Bowl",
        image: aboutPpng3,
        price: "$11 – $30",
        availability: "",
        weight: "0.250 kg",
        additionalWeight: "",
        actionType: "view",
        actionText: "View Products"
    },
    {
        name: "Kennel Kitchen Wet Dog Food For Puppy",
        image: aboutPpng4,
        price: "$11 – $28",
        availability: "",
        weight: "0.250 kg",
        additionalWeight: "",
        actionType: "view",
        actionText: "View Products"
    }
];

const getButtonClass = (actionType) => {
    const baseClass = "w-full py-2 px-4 text-white rounded-full text-center";
    return actionType === "add"
        ? `${baseClass} bg-[#FA6C41] hover:bg-[#e85c33]`
        : `${baseClass} bg-[#FA6C41] hover:bg-[#e85c33]`;
};


const MoreProducts = () => {


    const [allProducts, setAllProfucts] = useState([]);

    useEffect(() => {

        fetch('https://raw.githubusercontent.com/Shabbir404/petzzle/refs/heads/main/Jsons/LatestProducts.json')
            .then(res => res.json())
            .then(data => setAllProfucts(data)
            )

    }, [])

    return (
        <div>
            <div className="w-full md:w-11/12 lg:w-10/12 mx-auto p-4 bg-gray-50 overflow-x-auto">
                <h2 className="text-2xl font-bold text-center mb-6">Quick Comparison</h2>

                {/* Mobile View - Card based layout */}
                <div className="md:hidden grid grid-cols-1 gap-3 space-y-8">
                    {products.map((product, index) => (
                        <div key={`product-card-${index}`} className="bg-white rounded-lg shadow p-4">
                            <h3 className="font-bold   mb-2 text-center">{product.name}</h3>
                            <div className="flex justify-center mb-4">
                                <img src={product.image} alt={product.name} className="rounded-2xl h-ful object-contain" />
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center py-2 border-b">
                                    <span className="font-medium">Price:</span>
                                    <span className="font-extrabold text-[#FA6C41]">{product.price}</span>
                                </div>

                                <div className="flex justify-between items-center py-2 border-b">
                                    <span className="font-medium">Availability:</span>
                                    <span>{product.availability}</span>
                                </div>

                                <div className="py-2 border-b">
                                    <div className="font-medium">Weight: {product.weight}</div>
                                    {product.additionalWeight && (
                                        <div className="font-medium mt-2 flex gap-2">
                                            Weight:
                                            <h1 className="italic underline text-[#FA6C41]">{product.additionalWeight}</h1>
                                        </div>
                                    )}
                                </div>

                                <div className="pt-4 flex justify-center">
                                    <button className={getButtonClass(product.actionType)}>
                                        {product.actionText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tablet and Desktop View - Table layout */}
                <div className="hidden md:block">
                    <div className="grid grid-cols-3 lg:grid-cols-6 ">
                        {/* Header Row with Product Images */}
                        <div className="text-gray-500 font-medium flex items-end pb-2">Image</div>
                        {products.map((product, index) => (
                            <div key={`product-desktop-${index}`} className="bg-[#faf5f5] p-2 rounded">
                                <h3 className="font-medium text-gray-800 mb-2 h-16 overflow-hidden line-clamp-2">{product.name}</h3>
                                <div className="flex justify-center mb-4">
                                    <img src={product.image} alt={product.name} className="h-40 object-contain" />
                                </div>
                            </div>
                        ))}

                        {/* Rating Row */}
                        <div className="mt-4 mb-2 font-medium">Rating</div>
                        {products.map((product, index) => (
                            <div key={`rating-${index}`} className="mt-4 mb-2">
                                {/* Rating stars would go here */}
                            </div>
                        ))}

                        {/* Price Row */}
                        <div className="p-2 bg-[#F5F5F5] font-medium rounded">Price</div>
                        {products.map((product, index) => (
                            <div key={`price-${index}`} className="bg-[#F5F5F5] font-extrabold p-2 text-[#FA6C41] rounded">
                                {product.price}
                            </div>
                        ))}

                        {/* Add to Cart Row */}
                        <div className="bg-white p-2 mt-4 font-medium ">Add to cart</div>
                        {products.map((product, index) => (
                            <div key={`cart-${index}`} className="mt-4 bg-white p-2 rounded flex justify-center">
                                <button className={getButtonClass(product.actionType)}>
                                    {product.actionText}
                                </button>
                            </div>
                        ))}

                        {/* Availability Row */}
                        <div className="p-2 mt-4 bg-[#F5F5F5] font-medium ">Availability</div>
                        {products.map((product, index) => (
                            <div key={`availability-${index}`} className="mt-4 bg-[#F5F5F5] p-2 rounded">
                                {product.availability}
                            </div>
                        ))}

                        {/* Additional Information Row */}
                        <div className="bg-white p-2 mt-4 font-medium rounded">Additional Information</div>
                        {products.map((product, index) => (
                            <div key={`info-${index}`} className="bg-white mt-4 p-2 rounded">
                                <div className="font-medium">Weight: {product.weight}</div>
                                {product.additionalWeight && (
                                    <div className="font-medium mt-2 flex gap-2">
                                        Weight:
                                        <h1 className="italic underline text-[#FA6C41]">{product.additionalWeight}</h1>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <div>
                        <h1 className='text-2xl font-extrabold text-center mt-10'>Related products</h1>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-10 mb-10 mx-auto px-4">
                        {allProducts.map((product, i) => (
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
                </div>

            </div>
        </div>
    );
};

export default MoreProducts;