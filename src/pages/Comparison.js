import React from "react";
import "../styles/Comparison.css";

function Comparison() {
    return (
        <div className="comparison-page">
            {/* Banner */}
            <div className="compare-banner">
                <h2>Product Comparison</h2>
                <p>Home &gt; Comparison</p>
            </div>

            {/* Top Section */}
            <div className="compare-top">
                {/* LEFT */}
                <div className="compare-left">
                    <h3>Go to Product page for more Products</h3>
                    <button className="view-more">View More</button>
                </div>

                {/* CENTER */}
                <div className="compare-center">
                    <div className="product-card">
                        <img
                            src="https://furniro.archisacademy.com/assets/photo5-8ea7edf7.jpg"
                            alt="Asgaard Sofa"
                        />
                        <h3>Asgaard Sofa</h3>
                        <p className="price">Rs. 250,000.00</p>
                        <div className="rating">
                            <span>⭐ 4.7</span>
                            <span className="review">204 Review</span>
                        </div>
                    </div>

                    <div className="product-card">
                        <img
                            src="https://furniro.archisacademy.com/assets/bedroom-card-a27dcc83.png"
                            alt="Outdoor Sofa Set"
                        />
                        <h3>Outdoor Sofa Set</h3>
                        <p className="price">Rs. 224,000.00</p>
                        <div className="rating">
                            <span>⭐ 4.2</span>
                            <span className="review">145 Review</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="compare-right">
                    <h3>Add A Product</h3>
                    <div className="dropdown">
                        <select>
                            <option>Choose a Product</option>
                            <option>Asgaard Sofa</option>
                            <option>Outdoor Sofa Set</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Comparison Table */}
            <div className="compare-table">
                <table>
                    <thead>
                        <tr>
                            <th>General</th>
                            <th>Asgaard Sofa</th>
                            <th>Outdoor Sofa Set</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Sales Package</td>
                            <td>1 sectional sofa</td>
                            <td>1 Three Seater, 2 Single Seater</td>
                        </tr>
                        <tr>
                            <td>Model Number</td>
                            <td>TFCBLIGRBL68RHS</td>
                            <td>DTUBLIGRBL568</td>
                        </tr>
                        <tr>
                            <td>Secondary Material</td>
                            <td>Solid Wood</td>
                            <td>Solid Wood</td>
                        </tr>
                        <tr>
                            <td>Configuration</td>
                            <td>L-shaped</td>
                            <td>L-shaped</td>
                        </tr>
                        <tr>
                            <td>Upholstery Material</td>
                            <td>Fabric + Cotton</td>
                            <td>Fabric + Cotton</td>
                        </tr>
                        <tr>
                            <td>Upholstery Color</td>
                            <td>Bright Grey & Lion</td>
                            <td>Bright Grey & Lion</td>
                        </tr>

                        <tr>
                            <th colSpan="3">Product</th>
                        </tr>
                        <tr>
                            <td>Filling Material</td>
                            <td>Foam</td>
                            <td>Matte</td>
                        </tr>
                        <tr>
                            <td>Finish Type</td>
                            <td>Bright Grey & Lion</td>
                            <td>Bright Grey & Lion</td>
                        </tr>
                        <tr>
                            <td>Adjustable Headrest</td>
                            <td>No</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>Maximum Load Capacity</td>
                            <td>280 KG</td>
                            <td>300 KG</td>
                        </tr>
                        <tr>
                            <td>Origin of Manufacture</td>
                            <td>India</td>
                            <td>India</td>
                        </tr>

                        <tr>
                            <th colSpan="3">Dimensions</th>
                        </tr>
                        <tr>
                            <td>Width</td>
                            <td>265.32 cm</td>
                            <td>265.32 cm</td>
                        </tr>
                        <tr>
                            <td>Height</td>
                            <td>76 cm</td>
                            <td>76 cm</td>
                        </tr>
                        <tr>
                            <td>Depth</td>
                            <td>167.76 cm</td>
                            <td>167.76 cm</td>
                        </tr>
                        <tr>
                            <td>Weight</td>
                            <td>45 KG</td>
                            <td>65 KG</td>
                        </tr>

                        <tr>
                            <th colSpan="3">Warranty</th>
                        </tr>
                        <tr>
                            <td>Warranty Summary</td>
                            <td>1 Year Manufacturing Warranty</td>
                            <td>1.2 Year Manufacturing Warranty</td>
                        </tr>
                        <tr>
                            <td>Warranty Service Type</td>
                            <td>
                                For Warranty Claims or any product issues please email
                                operations@furniro.com
                            </td>
                            <td>
                                For Warranty Claims or issues please email
                                support@furniro.com
                            </td>
                        </tr>
                        <tr>
                            <td>Covered in Warranty</td>
                            <td>Manufacturing Defect</td>
                            <td>Manufacturing Defect</td>
                        </tr>
                        <tr>
                            <td>Not Covered in Warranty</td>
                            <td>
                                Damages due to usage beyond intended use and wear & tear.
                            </td>
                            <td>
                                Damages due to usage beyond intended use and wear & tear.
                            </td>
                        </tr>
                        <tr>
                            <td>Domestic Warranty</td>
                            <td>1 Year</td>
                            <td>3 Months</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button className="add-btn">Add To Cart</button>
                            </td>
                            <td>
                                <button className="add-btn">Add To Cart</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Comparison;
