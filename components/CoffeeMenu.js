// components/CoffeeMenu.jsx
import React from "react";
import CoffeeCard from "./CoffeeCard";

export default function CoffeeMenu() {
  const coffees = [
    {
      image: "/images/cappuccino-coffee.jfif",
      title: "Cappuccino Coffee",
      description: "Coffee 50%, Milk 50%",
      price: "8.50"
    },
    {
      image: "/images/americano-coffee.jfif",
      title: "Americano Coffee",
      description: "Coffee 50%, Milk 50%",
      price: "8.50"
    },
    {
      image: "/images/mocha-coffee.jfif",
      title: "Mocha Coffee",
      description: "Coffee 50%, Milk 50%",
      price: "8.50"
    },
    {
      image: "/images/latte-coffee.jfif",
      title: "Latte Coffee",
      description: "Coffee 50%, Milk 50%",
      price: "8.50"
    }
  ];

  return (
    <section className="coffee-menu">
      <h2>Enjoy a new blend of coffee style</h2>
      <p className="para">Explore all flavours of coffee with us. There is always a new cup worth experiencing.</p>
      <div className="coffee-grid">
        {coffees.map((coffee, index) => (
          <CoffeeCard key={index} {...coffee} />
        ))}
      </div>
    </section>
  );
}
