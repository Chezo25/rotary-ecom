import React from "react";
import Link from "next/link";

export const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">SMMALL TEXT</p>
        <H3>MidTxt</H3>
        <img src="" alt="headphones" className="hero-banner-image" />

        <div>
          <Link href="/product/ID">
            <button type="button">Click Here</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>Real Txt</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
