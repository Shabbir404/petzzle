import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const ShopSecondLayer = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Shabbir404/petzzle/refs/heads/main/Jsons/LatestProducts.json')
            .then(res => res.json())
            .then(data => setData(data)
            )
    }, [])


    //product id set

    const { id } = useParams();

    const navigate = useNavigate()

    const [selectedProductId, setSelectedProductId] = useState(null);

    // Step 2: Function to handle product click and set the selected product
    const handleProductClick = (id) => {
        navigate(`/shop/${id}`)
        setSelectedProductId(id)
    };


    return (
        <div>
            <div className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {data.map((product, i) => (
                        <div key={i} onClick={() => { handleProductClick(product.id) }}>
                            <div className="lg:w-58 lg:h-full h-88 md:h-78 lg:h-86  duration-200 lg:hover:scale-105 bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="relative">
                                    <img src={product.image} alt="Stainless Steel Dog Bowl" className="lg:w-58 w-full  lg:h-58" />
                                    <div className="absolute top-2 left-2 bg-[#FA6C41] text-white text-xs font-bold p-2 rounded-full">
                                        14%
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-medium text-sm mb-2">{product.title}</h3>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-400 line-through">$37</span>
                                            <span className="text-[#FA6C41]   text-sm">$30</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ShopSecondLayer;