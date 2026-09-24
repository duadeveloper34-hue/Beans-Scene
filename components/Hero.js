import React from 'react'
import './styles/hero.css';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h3>We have got your morning covered with</h3>
                <h1>Coffee</h1>
                <p>
                    It’s best to start a day with a cup of coffee. Discover the best
                    flavours of coffee you ever have. We provide the best for our
                    customers.
                </p>
                <button className="order-btn">Order Now</button>
            </div>
        </section>
    )
}

export default Hero
