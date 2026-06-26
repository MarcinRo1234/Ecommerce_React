import { Link } from "react-router-dom";
import { getProducts } from "../data/products"
import ProductCard from "../components/ProductCard";

export default function Home() {
    const products = getProducts();
    return(
        <div className="page">
            <div className="home-hero">
                <h1>Welcome to shop</h1>
                <p className="home-subtitle">Discover amazing products at great prices</p>
            </div>
            <div className="container">
                <h2 className="page-title">Our Prouducts</h2>
                <div className="product-grid">
                    {products.map((product) => ( <ProductCard product={product} key={product.id} />))}
                </div>
            </div>
        </div>
    )
}