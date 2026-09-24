import React from "react";

function CoffeeCard({ image, title, description, price }) {
  return (
    <div className="coffee-card">
      <img src={image} alt={title} className="coffee-img" />
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="price">${price}</p>
      <button className="order-btn">Order Now</button>
    </div>
  );
}

export default CoffeeCard;
