import React from "react";
import Image from "next/image";
import { GiCoffeeBeans } from "react-icons/gi";
import { BsAward } from "react-icons/bs";
import { GiCoffeeCup } from "react-icons/gi";
import { FaHandHoldingDollar } from "react-icons/fa6";
import "./styles/whywedifferent.css";


export default function WhyDifferent() {
  return (
    <section className="why-section">
      <div className="why-header">
        <h2>Why are we different?</h2>
        <p>We don&apos;t just make your coffee, we make your day!</p>
        <Image
          src="/images/coffe-splash.png"
          alt="Coffee Splash"
          className="splash-img"
          width={500}
          height={300}
        />
      </div>

      <div className="why-cards">
        <div className="card">
          <GiCoffeeBeans />
          <h3>Supream Beans</h3>
          <p>Beans that provides great taste</p>
        </div>

        <div className="card">
          <BsAward />
          <h3>High Quality</h3>
          <p>We provide the highest quality</p>
        </div>

        <div className="card">
          <GiCoffeeCup />
          <h3>Extraordinary</h3>
          <p>Coffee like you have never tasted</p>
        </div>

        <div className="card">
          <FaHandHoldingDollar />
          <h3>Affordable Price</h3>
          <p>Our Coffee prices are easy to afford</p>
        </div>
      </div>

      <div className="cta">
        <p>
          Great ideas start with great coffee, Let&apos;s help you achieve that
        </p>
        <h2>Get stated today</h2>
        <button>Join Us</button>
      </div>
    </section>
  );
}
