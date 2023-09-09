import React from "react";
import css from "@/styles/Landing.module.scss";
import bgImg from "@/assets/images/charity-bg.png";
import { Button } from "@mui/material";

const Landing = () => {
  return (
    <div className={css.landing} id="home">
      <img src={bgImg.src} alt="bg" className={css.bg} />
      <div className={css.content}>
        <span className={css.heading}>Empowering Orphanages</span>
        <span className={css.heading}>Transforming Lives</span>
        <span className={css.sub}>Fund donation for poor children</span>
        <br />
        <div className={css.action}>
          <a href={`${process.env.NEXT_PUBLIC_AUTH_DOMAIN}`} target="_blank">
            <Button variant="contained" size="large">
              JOIN US!
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
