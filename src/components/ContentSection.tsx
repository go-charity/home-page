import React, { FC } from "react";
import css from "@/styles/ContentSection.module.scss";
import childrenImages from "@/assets/images/annie-spratt-cVEOh_JJmEE-unsplash.jpg";
import img1 from "@/assets/images/doug-linstedt-jEEYZsaxbH4-unsplash.jpg";
import img2 from "@/assets/images/larm-rmah-AEaTUnvneik-unsplash.jpg";
import img3 from "@/assets/images/bennett-tobias-tqwOJAvUIh4-unsplash.jpg";
import img4 from "@/assets/images/ben-white-PAiVzSmYy-c-unsplash.jpg";
import img5 from "@/assets/images/ben-koorengevel-sjuLxUOEMY8-unsplash.jpg";
import img6 from "@/assets/images/avel-chuklanov-9cx4-QowgLc-unsplash.jpg";

const images = [img1.src, img2.src, img3.src, img4.src, img5.src, img6.src];

const ContentSection: FC<{
  content: { title: string; content: string };
  index?: number;
}> = ({ content, index }) => {
  return (
    <div className={css["content-page"]}>
      <div className={css.left}>
        <div className={css.heading}>
          {/* <span></span> */}
          <span className={css.big}>{content.title}</span>
        </div>
        <div className={css.content}>{content.content}</div>
      </div>
      <div className={css.right}>
        <img src={images[index || 0]} alt="image" />
      </div>
    </div>
  );
};

export default ContentSection;
