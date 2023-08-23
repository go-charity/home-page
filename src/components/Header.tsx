"use client";
import React, { useContext, useEffect, useRef } from "react";
import css from "@/styles/Header.module.scss";
import logo from "@/assets/images/logo.png";
import { Button } from "@mui/material";
import { MobileMenuContext } from "@/contexts/MobileMenuContext";
import gsap from "gsap";

const Header = () => {
  const mobileMenuContext = useContext(MobileMenuContext);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const logDistance = () => {
      const landingSection = document.querySelector("#home") as HTMLDivElement;
      const distanceFromTop = landingSection?.getBoundingClientRect().top;

      if (distanceFromTop <= -207) {
        gsap.to(headerRef.current, {
          background: "#ffc0cb",
          boxShadow: "0 0 10px rgba(138, 17, 60, 0.3)",
          animationFillMode: "forward",
        });
        headerRef.current?.classList.remove(css.top);
      } else {
        gsap.to(headerRef.current, {
          background: "transparent",
          boxShadow: "none",
          animationFillMode: "forward",
        });
        headerRef.current?.classList.add(css.top);
      }
    };

    window.addEventListener("scroll", logDistance);

    return () => {
      window.removeEventListener("scroll", logDistance);
    };
  }, []);

  return (
    <div className={`${css.header} ${css.top}`} ref={headerRef}>
      <a href="/" className={css["logo-container"]}>
        <img src={logo.src} alt="logo" />
        <span>GO.Charity</span>
      </a>
      <nav className={css.menu}>
        <a href="/#home">Home</a>
        <a href="/#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className={css.action}>
        <Button variant="outlined">Donate now!</Button>
      </div>
      <div className={css.hamburger} onClick={() => mobileMenuContext.show()}>
        <i className="fas fa-bars-staggered"></i>
      </div>
    </div>
  );
};

export default Header;
