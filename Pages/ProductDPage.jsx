import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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


    return (
        <div>

            {product ? (
                <div className="mt-30">
                    <div className="bg-[#F5F5F5] h-[140px]">
                        <h1 className="pt-12 font-semibold text-center">
                            <a className="hover:text-orange-600" href="/home">Home</a> /
                            <a className="hover:text-orange-600" href="/shop"> Shop</a> /
                            <a className="hover:text-orange-600" href="/pet-clothes"> Pet Clothes</a> /
                            <a className="hover:text-orange-600" href="/cold-weather-coats"> Toys</a>
                            <a className="hover:text-orange-600" href="/cold-weather-coats"> / Pedigree Adult Dry Dog Food, 1kg Pack</a>
                        </h1>
                    </div>

                    <div className="max-w-6xl mx-auto p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Left Column - Images */}
                            <div className="flex flex-col">
                                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                {/* Thumbnail Images */}
                                <div className="flex space-x-2">
                                    {product.thumbnails?.map((thumb, index) => (
                                        <img
                                            key={index}
                                            src={thumb}
                                            alt={`Thumbnail ${index}`}
                                            className="w-16 h-16 object-cover border rounded-lg cursor-pointer hover:border-gray-400"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Right Column - Product Details */}
                            <div>
                                <h1 className="text-2xl font-semibold mb-2">{product.title}</h1>

                                <div className="flex items-baseline mb-4">
                                    <span className="text-2xl font-bold text-red-500 mr-2">${product.price}</span>
                                </div>

                                <p className="text-gray-600 mb-4">{product.description || "No description available"}</p>

                                {/* Badges */}
                                <div className="flex space-x-3 mb-4">
                                    <span className="bg-blue-100 text-blue-800 p-2 rounded-full text-xs flex items-center">
                                        ✅ 101% Original
                                    </span>
                                    <span className="bg-gray-100 text-gray-800 p-2 rounded-full text-xs flex items-center">
                                        🔥 Lowest Price
                                    </span>
                                    <span className="bg-gray-100 text-gray-800 p-2 rounded-full text-xs flex items-center">
                                        🚚 Free Shipping
                                    </span>
                                </div>

                                {/* Buy Button */}
                                <button className="w-full py-3 bg-black text-white rounded hover:bg-gray-800 transition">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ProductDPage;
