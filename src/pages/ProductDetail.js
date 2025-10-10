import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../App";
import "./ProductDetail.css";

function ProductDetail() {
    const { id } = useParams(); // lấy tên sản phẩm từ đường dẫn
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext); // lấy hàm thêm giỏ hàng từ App

    // Danh sách sản phẩm
    const products = [
        {
            name: "Syltherine",
            desc: "Stylish cafe chair",
            price: 2500000,
            img: "https://furniro.archisacademy.com/assets/bedroom-card-a27dcc83.png",
        },
        {
            name: "Leviosa",
            desc: "Stylish cafe chair",
            price: 2500000,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvbv5C6QH_PPSn1b1ugDgeq0zsOjk0mqXMgg&s",
        },
        {
            name: "Lolito",
            desc: "Luxury big sofa",
            price: 7000000,
            img: "https://furniro.archisacademy.com/assets/bedroom-card-a27dcc83.png",
        },
        {
            name: "Respira",
            desc: "Outdoor bar table and stool",
            price: 500000,
            img: "https://furniro.archisacademy.com/assets/photo5-8ea7edf7.jpg",
        },
    ];

    // Lấy sản phẩm hiện tại theo tên (id)
    const current = products.find((p) => p.name === id) || products[0];

    return (
        <main className="product-detail">
            <div className="detail-container">
                {/* Ảnh sản phẩm */}
                <div className="main-img">
                    <img src={current.img} alt={current.name} />
                </div>

                {/* Thông tin sản phẩm */}
                <div className="right-info">
                    <h1>{current.name}</h1>
                    <h3>Rp {current.price.toLocaleString()}</h3>
                    <p className="desc">
                        Setting the bar as one of the loudest speakers in its class,<br />
                        the Kilburn is a compact, stout-hearted hero with a well-balanced
                        sound and extended highs.
                    </p>

                    {/* Nút Add to cart */}
                    <div className="actions">
                        <button
                            className="add"
                            onClick={() => addToCart(current)}
                        >
                            Add To Cart
                        </button>
                    </div>

                    <div className="details">
                        <p>SKU: <span>SS001</span></p>
                        <p>Category: <span>Sofas</span></p>
                        <p>Tags: <span>Sofa, Chair, Home, Shop</span></p>
                    </div>
                </div>
            </div>

            {/* Related Products */}
            <section className="related">
                <h2>Related Products</h2>
                <div className="product-grid">
                    {products.map((p, i) => (
                        <div key={i} className="product-card">
                            <button
                                className="product-btn"
                                onClick={() => navigate(`/product/${p.name}`)}
                            >
                                <img src={p.img} alt={p.name} />
                                <div className="overlay">
                                    <button
                                        className="add-to-cart"
                                        onClick={() => addToCart(current)}
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </button>
                            <h3>{p.name}</h3>
                            <p>{p.desc}</p>
                            <strong>Rp {p.price.toLocaleString()}</strong>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default ProductDetail;
