import React from "react";
import "../styles/CategoryCard.css";

function CategoryCard({ category }) {
    return (
        <button className="category-card">
            <img src={category.img} alt={category.title} />
            <h3>{category.title}</h3>
        </button>
    );
}

export default CategoryCard;
