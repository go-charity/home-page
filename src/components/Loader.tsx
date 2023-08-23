"use client";
import React from "react";
import { Hearts } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to bottom, #fff1f3, #ffc0cb)",
      }}
    >
      <Hearts
        height="100"
        width="100"
        color="#f83b66"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
