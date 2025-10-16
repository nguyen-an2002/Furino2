import React from "react";
import "../styles/Shop.css";
import ProductCard from "../components/ProductCard";

function Shop() {
    const products = [
        { name: "Syltherine", desc: "Stylish cafe chair", price: "Rp 2.500.000", img: "https://furniro.archisacademy.com/assets/bedroom-card-a27dcc83.png" },
        { name: "Leviosa", desc: "Stylish cafe chair", price: "Rp 2.500.000", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvbv5C6QH_PPSn1b1ugDgeq0zsOjk0mqXMgg&s" },
        { name: "Lolito", desc: "Luxury big sofa", price: "Rp 7.000.000", img: "https://furniro.archisacademy.com/assets/bedroom-card-a27dcc83.png" },
        { name: "Respira", desc: "Outdoor bar table and stool", price: "Rp 500.000", img: "https://furniro.archisacademy.com/assets/photo5-8ea7edf7.jpg" },
        { name: "Syltherine", desc: "Stylish cafe chair", price: "Rp 2.500.000", img: "https://furniro.archisacademy.com/assets/bedroom-card-a27dcc83.png" },
        { name: "Leviosa", desc: "Stylish cafe chair", price: "Rp 2.500.000", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvbv5C6QH_PPSn1b1ugDgeq0zsOjk0mqXMgg&s" },
        { name: "Lolito", desc: "Luxury big sofa", price: "Rp 7.000.000", img: "https://furniro.archisacademy.com/assets/bedroom-card-a27dcc83.png" },
        { name: "Respira", desc: "Outdoor bar table and stool", price: "Rp 500.000", img: "https://furniro.archisacademy.com/assets/photo5-8ea7edf7.jpg" },
        { name: "Syltherine", desc: "Stylish cafe chair", price: "Rp 2.500.000", img: "https://furniro.archisacademy.com/assets/bedroom-card-a27dcc83.png" },
        { name: "Leviosa", desc: "Stylish cafe chair", price: "Rp 2.500.000", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvbv5C6QH_PPSn1b1ugDgeq0zsOjk0mqXMgg&s" },
    ];

    return (
        <main className="shop-page">
            {/* Banner */}
            <section className="shop-banner">
                <h1>Shop</h1>
                <p>Home &gt; Shop</p>
            </section>

            {/* Products */}
            <section className="shop-products">
                <div className="product-grid">
                    {products.map((p, i) => (
                        <ProductCard key={i} product={p} />
                    ))}
                </div>
            </section>

            {/* Pagination */}
            <div className="pagination">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>Next</button>
            </div>
        </main>
    );
}

export default Shop;
