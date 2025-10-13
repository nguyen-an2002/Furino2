import React, { useContext } from "react";
import { CartContext } from "../App";
import "../styles/Cart.css";
import { useNavigate } from "react-router-dom";

function Cart() {
    const { cart, removeFromCart } = useContext(CartContext);
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const navigate = useNavigate();
    return (
        <main className="cart-page">
            <section className="cart-banner">
                <h1>Cart</h1>
                <p>Home &gt; Cart</p>
            </section>

            <div className="cart-container">
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => (
                            <tr key={item.name}>
                                <td>
                                    <img src={item.img} alt={item.name} />
                                    <span>{item.name}</span>
                                </td>
                                <td>Rs. {item.price.toLocaleString()}</td>
                                <td>{item.quantity}</td>
                                <td>Rs. {(item.price * item.quantity).toLocaleString()}</td>
                                <td>
                                    <button onClick={() => removeFromCart(item.name)}>x</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="cart-totals">
                    <h3>Cart Totals</h3>
                    <p>Subtotal: <span>Rs. {subtotal.toLocaleString()}</span></p>
                    <p>Total: <span className="total">Rs. {subtotal.toLocaleString()}</span></p>
                    <button
                        className="checkout-btn"
                        onClick={() => navigate("/checkout")}   // ✅ điều hướng đến trang checkout
                    >
                        Check Out
                    </button>
                </div>
            </div>
        </main>
    );
}

export default Cart;
