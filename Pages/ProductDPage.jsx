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
                <div>
                    <h1>{product.title}</h1>
                    <img src={product.image} alt={product.title} />
                    <p>{product.price}</p>
                    <p>{product.description || "No description available"}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ProductDPage;
