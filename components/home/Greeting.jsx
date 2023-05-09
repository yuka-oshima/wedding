import React, { useEffect, useState } from "react";
// import { useInView } from "react-intersection-observer";

const Greeting = ({ data }) => {
  const [message, setMessage] = useState("");
  // const { ref, inView } = useInView({
  //   rootMargin: "100px",
  //   triggerOnce: true,
  // });

  // useEffect(() => {
  //   if (userInfo.message === undefined) return;
  //   const editMessage = userInfo.message.split("/");
  //   const editMessageElement = editMessage.map((message, index) => {
  //     //messageが"//n"の場合は改行
  //     if (message === "\\n") {
  //       return <br/>;
  //     }else{
  //       return <p key={index} className="custom-font text-md">{message}</p>;
  //     }
  //   });
  //   setMessage(editMessageElement);
  // }, [userInfo]);

  return (
    <>
      {/* <div className="h-screen flex items-center justify-center bg-cover greeting-bg-img"> */}
      <div className="h-auto py-[2em] flex items-center justify-center bg-cover bg-[#d8c0e4]">
        <div className="w-[89%] bg-white text-center bg-opacity-95">
          <div className="w-full h-[3em] mt-[1.5em]">
            <p className="custom-title-font text-5xl font-medium tracking-wide">
              Message
            </p>
          </div>
          {/* <div
            ref={ref}
            className={
              inView
                ? "fadeIn flex-col items-center justify-center mt-[1rem]"
                : "flex-col items-center justify-center my-[2.5rem]"
            }
          > */}
          <div
            className={"fadeIn flex-col items-center justify-center mt-[1rem]"
            }
          ></div>
            <div
              id="guestName"
              className="font-semibold custom-font text-xl mt-[1em]"
            >
              {data}
            </div>
            <br />
            {message === "" ? (
              <>
                <p id="greetingBody" className="custom-font text-sm mb-[1.5em]">
                  本日はおいそがしい中
                  <br />
                  私たちのパーティーにご出席していただき
                  <br />
                  誠にありがとうございます
                  <br />
                  <br />
                  皆様にあたたかく見守られ
                  <br />
                  この佳き日を迎えられたことに
                  <br />
                  心より感謝いたします
                  <br />
                  <br />
                  私たちは2022年8月11日に結婚し
                  <br />
                  夫婦となりました
                  <br />
                  <br />
                  未熟なふたりですが手を取り合い
                  <br />
                  ともに歩んでいきたいと思います
                  <br />
                  <br />
                  これからも末永いお付き合いを
                  <br />
                  よろしくお願いいたします
                  <br />
                  <br />
                  どうぞ楽しいひとときを
                  <br />
                  お過ごしください
                  <br />
                  <br />
                  啓　由華
                </p>
              </>
            ) : (
              <>
                <p className="custom-font text-sm mb-[1.5em]">{message}</p>
              </>
            )}
          </div>
        </div>
    </>
  );
};

export default Greeting;
