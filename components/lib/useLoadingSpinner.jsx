import React from "react";
import BarLoader from "react-spinners/BarLoader";

export function Loader({ height,width, isLoading, className }) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <BarLoader
        color="#9E76B4"
        height={height}
        width={width}
        loading={isLoading}
        speedMultiplier={0.8}
      />
    </div>
  );
}
