"use client";
import { MobileMenuContext } from "@/contexts/MobileMenuContext";
import { AnimatePresence, Variants, motion } from "framer-motion";
import React, { useContext, useMemo } from "react";
import css from "@/styles/MobileMenu.module.scss";
import { Button } from "@mui/material";

const MobileMenu: React.FC = () => {
  const mobileMenuContext = useContext(MobileMenuContext);
  const variants = useMemo<Variants>(
    () => ({
      far: {
        x: 1000,
      },
      near: {
        x: 0,
      },
    }),
    []
  );

  return (
    <>
      <AnimatePresence>
        {mobileMenuContext.display && (
          <>
            <motion.nav
              variants={variants}
              initial="far"
              animate="near"
              exit={"far"}
              transition={{ type: "tween", easings: ["easeOut"] }}
              className={css["mobile-menu"]}
            >
              <div className={css.cancel}>
                <i
                  className="fas fa-xmark"
                  onClick={() => mobileMenuContext.hide()}
                ></i>
              </div>
              <a href="/#home">Home</a>
              <a href="/#about">About</a>
              <a href="/#contact">Contact</a>
              <div className={css.action}>
                <Button variant="outlined">Donate now!</Button>
                <a
                  href={`${process.env.NEXT_PUBLIC_AUTH_DOMAIN}`}
                  target="_blank"
                >
                  <Button variant="contained">JOIN US!</Button>
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
