import React from "react";
import "../App.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-cols">
                <div>
                    <h3>Funiro.</h3>
                    <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
                </div>

                <div>
                    <h4>Links</h4>
                    <p>Home</p>
                    <p>Shop</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>

                <div>
                    <h4>Help</h4>
                    <p>Payment Options</p>
                    <p>Returns</p>
                    <p>Privacy Policies</p>
                </div>

                <div>
                    <h4>Newsletter</h4>
                    <input type="text" placeholder="Enter Your Email Address" />
                    <button>SUBSCRIBE</button>
                </div>
            </div>
            <p className="copy">2023 funiro. All rights reserved</p>
        </footer>
    );
}

export default Footer;
