import React from "react";
import Image from "next/image";
import "./styles/getstarted.css"; // apni CSS file ka name yahan likho

export default function GetStarted() {
  return (
    <section className="get">
      <div className="overlay"></div>

      <div className="get-content">
        <div className="get-left">
          <Image
            src="/images/coffeecup.png"
            alt="coffee cup"
            width={500}
            height={500}
          />
        </div>

        <div className="get-right">
          <h1>
            Get a chance to have an <br /> <span>Amazing morning</span>
          </h1>
          <p>
            We are giving you a one time opportunity to experience a better life
            with coffee. Bean Scene is a coffee shop that provides you with
            quality coffee that helps boost your productivity and helps build
            your mood. Having a cup of coffee is good, but having a cup of real
            coffee is greater. There is no doubt that you will enjoy this coffee
            more than others you have ever tasted.
          </p>
          <button>Order Now</button>
        </div>
      </div>
    </section>
  );
}
