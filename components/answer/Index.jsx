import { useRouter } from "next/router";
import { useState } from "react";
import ContentsEn from "./ContentsEn";
import ContentsJp from "./ContentsJp";

const AnswerIndex = () => {
  const [language, setLanguage] = useState("JP");
  const router = useRouter();
  const changeLanguage = (e) => {
    if (e.target.id === "JP") {
      setLanguage("JP");
    } else if (e.target.id === "EN") {
      setLanguage("EN");
    }
  };

  return (
    <div className="w-full h-screen answer-bg-img">
      <div className="w-[98%] flex justify-end mr-[0.5em]">
        <button
          id="JP"
          className="mr-[1em]"
          onClick={(e) => {
            changeLanguage(e);
          }}
        >
          JP
        </button>
        <button
          id="EN"
          className="mr-[1em]"
          onClick={(e) => {
            changeLanguage(e);
          }}
        >
          EN
        </button>
      </div>
      <div className="w-full h-auto text-center">
        <div className="pt-[0.25em] custom-title-font font-medium text-5xl">
          Answer
        </div>
        {language === "JP" ? <ContentsJp /> : <ContentsEn />}
      </div>
      <div className="flex justify-center pb-[0.5em]">
        <div className="w-[4em] py-[0.5em] border border-[#000] text-center">
          <button onClick={() => router.back()}>Home</button>
        </div>
      </div>
    </div>
  );
};

export default AnswerIndex;
