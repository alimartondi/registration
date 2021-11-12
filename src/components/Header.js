import React, { useState, useEffect } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import GradientLogo from "../assets/images/gradient-logo.svg";

export default function Header() {
  const isOnTop = useScrollHandler();

  return (
    <Navbar
      expand="lg"
      className={`navbar ${isOnTop ? "" : "scrolled"} fixed-top z-10`}
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src={`${isOnTop ? Logo : GradientLogo}`}
            alt="logo"
            className="img-fluid"
          />
        </Navbar.Brand>
        <Link to="/login">
          <Button
            variant={`${
              isOnTop ? "light text-danger" : "main-button"
            } light px-4`}
          >
            Login
          </Button>
        </Link>
      </Container>
    </Navbar>
  );
}

const useScrollHandler = () => {
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY < 8;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);

  return scroll;
};
