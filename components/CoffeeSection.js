import React from "react";
import "./styles/coffeesection.css";


const CoffeeSection = () => {
    return (
        <section className="coffee-section">
            <img src="/images/droplet.png" alt="Chocolate drip" className="top-drip" />
            <div className="coffee-content">
                <div className="text-area">
                    <h2>Discover the best coffee</h2>
                    <p>
                        Bean Scene is a coffee shop that provides you with quality coffee
                        that helps boost your productivity and helps build your mood.
                        Having a cup of coffee is good, but having a cup of real coffee is
                        greater. There is no doubt that you will enjoy this coffee more than
                        others you have ever tasted.
                    </p>
                    <button className="learn-btn">Learn More</button>
                </div>

                <div className="image-area">
                    <img src="/images/cup.png" alt="Coffee cup" />
                </div>
            </div>

            {/* Bottom splash */}
            <img src="/images/coffe-splash.png" alt="Chocolate splash" className="bottom-splash" />
        </section>
    );
};

export default CoffeeSection;
