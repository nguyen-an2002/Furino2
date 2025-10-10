import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <div className="contact-page">

            <div className="contact-banner">
                <h2>Contact</h2>
                <p>Home &gt; Contact</p>
            </div>


            <section className="contact-section">
                <h2>Get In Touch With Us</h2>
                <p className="subtitle">
                    For more information about our products & services, please feel free to drop us an email.
                    Our staff is always here to help you out. Do not hesitate!
                </p>

                <div className="contact-content">

                    <div className="contact-info">
                        <div className="info-box">
                            <h4> Address</h4>
                            <p>36 P. Hoàng Cầu, Chợ Dừa, Đống Đa, Hà Nội</p>
                        </div>
                        <div className="info-box">
                            <h4> Phone</h4>
                            <p>Mobile: (+84) 981967079</p>
                            <p>Hotline: (+84) 981967179</p>
                        </div>
                        <div className="info-box">
                            <h4>Working Time</h4>
                            <p>Monday–Friday: 9:00 – 17:00</p>

                        </div>
                    </div>


                    <form className="contact-form">
                        <label>Your name</label>
                        <input type="text" placeholder="Abc" />

                        <label>Email address</label>
                        <input type="email" placeholder="Abc@def.com" />

                        <label>Subject</label>
                        <input type="text" placeholder="This is optional" />

                        <label>Message</label>
                        <textarea placeholder="feedback"></textarea>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Contact;
