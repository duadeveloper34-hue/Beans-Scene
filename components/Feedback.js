
import React from "react";
import Image from "next/image";
import "./styles/feedback.css";
// import leftSplash from "/images/cup-splash.png";  
// import rightSplash from "/images/coffe-splash.png"; 
// import userImg from "/images/user.jpg";  
// profile image


function Feedback() {
  return (
    <section className="feedback-section">
      <h2 className="feedback-title">Our coffee perfection feedback</h2>
      <p className="feedback-subtitle">
        Our customers have amazing things to say about us
      </p>

      <Image
        src="/images/cupsplash.png"
        alt="left splash"
        className="left-splash"
        width={500}
        height={500}
      />
      <div className="feedback-box">
        <p className="feedback-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book...
        </p>

        <div className="feedback-user">
          <Image
            src="/images/user.jpg"
            alt="user"
            className="user-img"
            width={80}
            height={80}
          />
          <div>
            <h4>Jonny Thomas</h4>
            <p>Project Manager</p>
          </div>
        </div>
      </div>
      <Image
        src="/images/coffe-splash.png"
        alt="right splash"
        className="right-splash"
        width={500}
        height={500}
      />
    </section>
  );
}

export default Feedback;
