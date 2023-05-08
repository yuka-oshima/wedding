import React from "react";

/**
 * @description HomeTitle component
 * @returns {JSX} Component JSX
 */
const HomeTitle = () => {
  return (
    <>
      <div className="fadeIn h-screen flex items-center justify-center bg-cover home-bg-img ">
        <div className={"w-min-full fadeIn_delay custom-title-font font-medium"}>
          <p className="text-7xl tracking-wide">
            Welcome 
          </p>
          <p className="ml-[1.5em] text-3xl">to our wedding party</p>
        </div>
      </div>
    </>
  );
};
export default HomeTitle;
