import React from "react";
import HeroBackground from "../assets/images/hero-background.svg";
import HeroBackgroundMobile from "../assets/images/hero-background-mobile.svg";

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="hero-background">
        <img
          src={HeroBackground}
          alt="hero-background"
          className="img-fluid d-none d-md-block position-absolute top-0 start-0 end-0 mx-auto"
        />
        <img
          src={HeroBackgroundMobile}
          alt="hero-background"
          className="img-fluid d-block d-md-none position-absolute"
        />
      </div>
    </div>
  );
}
