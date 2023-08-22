"use client";
import React from "react";
import css from "@/styles/Header.module.scss";
import logo from "@/assets/images/logo.png";
import { Button } from "@mui/material";

const Header = () => {
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
    </div>
  );
};

export default Header;
