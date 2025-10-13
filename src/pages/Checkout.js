import React from "react";
import "../styles/Checkout.css";

function Checkout() {
    return (
        <div className="checkout-page">
            {/* === Banner === */}
            <div className="checkout-banner">
                <h2>Checkout</h2>
                <p>Home &gt; Checkout</p>
            </div>

            {/* === Main Content === */}
            <div className="checkout-content">
                {/* === Left Form === */}
                <div className="checkout-left">
                    <h3>Billing details</h3>
                    <form className="billing-form">
                        <div className="row">
                            <div>
                                <label>First Name</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Last Name</label>
                                <input type="text" />
                            </div>
                        </div>

                        <label>Company Name (Optional)</label>
                        <input type="text" />

                        <label>Country / Region</label>
                        <select>
                            <option>Sri Lanka</option>
                            <option>Vietnam</option>
                            <option>japan</option>
                        </select>

                        <label>Street address</label>
                        <input type="text" />

                        <label>Town / City</label>
                        <input type="text" />

                        <label>Province</label>
                        <select>
                            <option>Western Province</option>
                            <option>Ninh Bình</option>
                        </select>

                        <label>ZIP code</label>
                        <input type="text" />

                        <label>Phone</label>
                        <input type="text" />

                        <label>Email address</label>
                        <input type="email" />

                        <label></label>
                        <input type="text" placeholder="Additional information" />
                    </form>
                </div>

                {/* === Right Summary === */}
                <div className="checkout-right">
                    <h3>Your Order</h3>

                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Asgaard Sofa × 1</td>
                                <td>Rs. 250,000.00</td>
                            </tr>
                            <tr>
                                <td className="label">Subtotal</td>
                                <td>Rs. 250,000.00</td>
                            </tr>
                            <tr>
                                <td className="label">Total</td>
                                <td className="total">Rs. 250,000.00</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="payment">
                        <label>
                            <input type="radio" name="payment" /> Direct Bank
                            Transfer
                        </label>
                        <p className="note">
                            Make your payment directly into our bank account. Please use your
                            Order ID as the payment reference. Your order will not be shipped
                            until the funds have cleared in our account.
                        </p>

                        <label>

                            <input type="radio" name="payment" /> Cash On Delivery
                        </label>
                        <label>

                            <input type="radio" name="payment" /> Direct Bank Transfer
                        </label>

                        <p className="privacy">
                            Your personal data will be used to support your experience
                            throughout this website, to manage access to your account, and for
                            other purposes described in our <strong>privacy policy.</strong>

                        </p>

                        <button className="place-order">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
