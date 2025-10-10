import React from "react";
import "./Shop.css";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();
    return (
        <main className="shop-page">

            <section className="shop-banner">
                <h1>Shop</h1>
                <p>Home &gt; Shop</p>
            </section>




            <section className="shop-products">
                {products.map((p, i) => (
                    <div key={i} className="product-card">


                        <button
                            className="product-btn"
                            onClick={() => navigate(`/product/${p.name}`)}
                        >
                            <img src={p.img} alt={p.name} />

                            <div className="overlay">
                                <button className="add-to-cart">Add to cart</button>
                                <div className="overlay-actions">
                                    <span> Share</span>
                                    <span> Compare</span>
                                    <span> Like</span>
                                </div>
                            </div>
                        </button>
                        <h3>{p.name}</h3>
                        <p>{p.desc}</p>
                        <strong>{p.price}</strong>

                    </div>
                ))}
            </section>


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
