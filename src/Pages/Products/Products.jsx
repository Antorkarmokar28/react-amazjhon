import { useLoaderData } from "react-router-dom";
import Product from "./product";

const Products = () => {
    const { products } = useLoaderData();
    console.log(products)
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    products.map( product => <Product key={product?.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;