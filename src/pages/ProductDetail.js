import React from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductDetail.css";
import ProductCard from "../components/ProductCard";

function ProductDetail() {
    const { id } = useParams();

    const products = [
        {
            name: "Syltherine",
            desc: "Stylish cafe chair",
            price: "Rp 2.500.000",
            img: "https://furniro.archisacademy.com/assets/bedroom-card-a27dcc83.png",
        },
        {
            name: "Leviosa",
            desc: "Stylish cafe chair",
            price: "Rp 2.500.000",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvbv5C6QH_PPSn1b1ugDgeq0zsOjk0mqXMgg&s",
        },
    ];

    return (
        <main className="product-detail">
            <div className="detail-container">
                <div className="main-img">
                    <img
                        src="https://furniro.archisacademy.com/assets/photo5-8ea7edf7.jpg"
                        alt={id}
                    />
                </div>

                <div className="right-info">
                    <h1>{id}</h1>
                    <h3>Rs. 250,000.00</h3>
                    <p className="desc">
                        Setting the bar as one of the loudest speakers in its class...
                    </p>
                    <div className="sizes">
                        <p>Size</p>
                        <button>L</button>
                        <button>XL</button>
                        <button>XS</button>
                    </div>
                    <div className="actions">
                        <button className="add">Add To Cart</button>
                    </div>
                </div>
            </div>

            {/* Related Products */}
            <section className="related">
                <h2>Related Products</h2>
                <div className="product-grid">
                    {products.map((p, i) => (
                        <ProductCard key={i} product={p} />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default ProductDetail;
