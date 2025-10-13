import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../App";
import "../App.css";

function Header() {
    const { cart } = useContext(CartContext);
    const [showMiniCart, setShowMiniCart] = useState(false);
    const navigate = useNavigate();

    const subtotal = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <header className="header">
            <div className="logo">Furniro</div>

            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

            <div className="icons">
                <span>accout</span>
                <span>search</span>
                <span>fav</span>

                <div className="cart-icon" onClick={() => setShowMiniCart(!showMiniCart)}>
                    cart
                    {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
                </div>
            </div>

            {/* MINI CART */}
            {showMiniCart && (
                <div className="mini-cart active">
                    <h4>Shopping Cart</h4>

                    {cart.length === 0 ? (
                        <p className="empty-cart">Giỏ hàng trống </p>
                    ) : (
                        <>
                            <div className="mini-items">
                                {cart.map((item, i) => (
                                    <div key={i} className="mini-item">
                                        <img src={item.img} alt={item.name} />
                                        <div>
                                            <p>{item.name}</p>
                                            <span>
                                                {item.quantity} x Rp{" "}
                                                {item.price.toLocaleString("vi-VN")}
                                            </span>

                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mini-cart-total">
                                <p>Subtotal:</p>
                                <strong>Rp {subtotal.toLocaleString("vi-VN")}</strong>
                            </div>

                            <div className="mini-buttons">
                                <button
                                    className="mini-btn checkout"
                                    onClick={() => {
                                        setShowMiniCart(false);
                                        navigate("/cart");
                                    }}
                                >
                                    Checkout
                                </button>
                                <button
                                    className="mini-btn compare"
                                    onClick={() => {
                                        setShowMiniCart(false);
                                        navigate("/comparison");
                                    }}
                                >
                                    Comparison
                                </button>

                            </div>
                        </>
                    )}
                </div>
            )}
        </header>
    );
}

export default Header;
