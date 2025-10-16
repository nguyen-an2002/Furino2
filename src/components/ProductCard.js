import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../App";
import "../styles/ProductCard.css";

function ProductCard({ product }) {
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <div className="product-card">
            <button
                className="product-btn"
                onClick={() => navigate(`/product/${product.name}`)}
            >
                <img src={product.img} alt={product.name} />
                <div className="overlay">
                    <button
                        className="add-to-cart"
                        onClick={(e) => {
                            e.stopPropagation();
                            addToCart(product);
                        }}
                    >
                        Add to cart
                    </button>
                    <div className="overlay-actions">
                        <span>Share</span>
                        <span>Compare</span>
                        <span>Like</span>
                    </div>
                </div>
            </button>
            <h3>{product.name}</h3>
            <p>{product.desc}</p>
            <strong>{product.price}</strong>
        </div>
    );
}

export default ProductCard;
