import React from "react";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
function Home() {
    const categories = [
        { title: "Dining", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUA3yUFVP7pA0E76VJYJ1-BA8BoVyUOq0bGQ&s" },
        { title: "Living", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvbv5C6QH_PPSn1b1ugDgeq0zsOjk0mqXMgg&s" },
        { title: "Bedroom", img: "https://furniro.archisacademy.com/assets/photo5-8ea7edf7.jpg" },
    ];

    const products = [
        { name: "Syltherine", desc: "Stylish cafe chair", price: "Rp 2.500.000", img: "https://furniro.archisacademy.com/assets/bedroom-card-a27dcc83.png" },
        { name: "Leviosa", desc: "Stylish cafe chair", price: "Rp 2.500.000", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvbv5C6QH_PPSn1b1ugDgeq0zsOjk0mqXMgg&s" },
        { name: "Lolito", desc: "Luxury big sofa", price: "Rp 7.000.000", img: "https://furniro.archisacademy.com/assets/bedroom-card-a27dcc83.png" },
        { name: "Respira", desc: "Outdoor bar table and stool", price: "Rp 500.000", img: "https://furniro.archisacademy.com/assets/photo5-8ea7edf7.jpg" },
    ];

    const inspirationImgs = [
        "https://furniro-tural.vercel.app/assets/product1-7c328aa7.png",
        "https://www.furniro.store/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2FEZI5Q48cjkZCdLJlIz3ORtiqbXIrxkNgYFz6cGj4M5PsT3Ef&w=3840&q=75",

    ];

    const gallery = [
        "https://www.furniro.store/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2FEZI5Q48cjkZCdLJlIz3ORtiqbXIrxkNgYFz6cGj4M5PsT3Ef&w=3840&q=75",
        "https://furniro.archisacademy.com/assets/photo5-8ea7edf7.jpg",
        "https://www.furniro.store/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2FEZI5Q48cjkZCdLJlIz3ORtiqbXIrxkNgYFz6cGj4M5PsT3Ef&w=3840&q=75",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvbv5C6QH_PPSn1b1ugDgeq0zsOjk0mqXMgg&s",
        "https://furniro.archisacademy.com/assets/photo5-8ea7edf7.jpg",
        "https://www.furniro.store/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2FEZI5Q48cjkZCdLJlIz3ORtiqbXIrxkNgYFz6cGj4M5PsT3Ef&w=3840&q=75",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvbv5C6QH_PPSn1b1ugDgeq0zsOjk0mqXMgg&s",
        "https://furniro.archisacademy.com/assets/photo5-8ea7edf7.jpg",
        "https://furniro.archisacademy.com/assets/photo5-8ea7edf7.jpg",
    ];
    const navigate = useNavigate();
    return (
        <main>
            {/* HERO */}
            <section className="hero">
                <div className="hero-text">
                    <p className="new">New Arrival</p>
                    <h1>Discover Our New Collection</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    <button>BUY NOW</button>
                </div>
            </section>

            {/* CATEGORIES */}
            <section className="categories">
                <h2>Browse The Range</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="category-grid">
                    {categories.map((c) => (
                        <button key={c.title} className="category-card">
                            <img src={c.img} alt={c.title} />
                            <h3>{c.title}</h3>
                        </button>
                    ))}
                </div>
            </section>


            {/* PRODUCTS */}
            <section className="products">
                <h2>Our Products</h2>
                <div className="product-grid">
                    {products.map((p, index) => (
                        <div key={index} className="product-card">
                            <button
                                className="product-btn"
                                onClick={() => navigate(`/product/${p.name}`)}   // 👈 chuyển đến ProductDetail
                            >
                                <img src={p.img} alt={p.name} />
                                <div className="overlay">
                                    <button className="add-to-cart" >Add to cart</button>
                                    <div className="overlay-actions">
                                        <span>Share</span>
                                        <span>Compare</span>
                                        <span>Like</span>
                                    </div>
                                </div>
                            </button>
                            <h3>{p.name}</h3>
                            <p>{p.desc}</p>
                            <strong>{p.price}</strong>
                        </div>
                    ))}
                </div>
                <button className="show-more">Show More</button>
            </section>


            {/* INSPIRATION */}
            <section className="inspiration">
                <div className="left">
                    <h2>50+ Beautiful rooms inspiration</h2>
                    <p>Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
                    <button className="explore">Explore More</button>
                </div>
                <div className="right inspiration-gallery">
                    {inspirationImgs.map((img, i) => (
                        <img key={i} src={img} alt={`Inspiration ${i}`} />
                    ))}
                </div>
            </section>

            {/* GALLERY SECTION */}
            <section className="gallery">
                <h2>Share your setup with</h2>
                <h1>#FuniroFurniture</h1>
                <div className="gallery-grid">
                    {gallery.map((url, i) => (
                        <img src={url} alt={`gallery-${i}`} key={i} />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Home;
