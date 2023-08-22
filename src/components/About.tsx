import React from "react";
import css from "@/styles/About.module.scss";
import childrenImages from "@/assets/images/annie-spratt-cVEOh_JJmEE-unsplash.jpg";

const About = () => {
  return (
    <div className={css.about} id="about">
      <div className={css.left}>
        <div className={css.heading}>
          <span>ABOUT US</span>
          <span className={css.big}>We Help at Every Step from Concept.</span>
        </div>
        <div className={css.content}>
          Welcome to GO.Charity, a crowdfunding platform with a profound
          purpose. Founded by Mr. Prince C. Onukwili, GO.Charity is a pioneering
          initiative based in Nigeria that's rewriting the rules of
          crowdfunding. Our commitment goes beyond fundraising; we exist to
          amplify the voices of less privileged children, particularly those in
          orphanages. At GO.Charity, we're not just a platform; we're a movement
          for change.
        </div>
      </div>
      <div className={css.right}>
        <img src={childrenImages.src} alt="children" />
      </div>
    </div>
  );
};

export default About;
