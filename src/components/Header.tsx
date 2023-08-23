"use client";
import React, { useContext } from "react";
import css from "@/styles/Header.module.scss";
import logo from "@/assets/images/logo.png";
import { Button } from "@mui/material";
import { MobileMenuContext } from "@/contexts/MobileMenuContext";

const Header = () => {
  const mobileMenuContext = useContext(MobileMenuContext);

  return (
    <div className={`${css.header} ${css.top}`}>
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
