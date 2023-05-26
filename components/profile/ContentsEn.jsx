const ContentsEn = () => {
    return (
      <>
        <div className="flex justify-center mt-[3em]">
          <img
            src="/images/groom.jpg"
            className="w-[8em] h-[8em] rounded-3xl object-cover object-left"
            alt=""
          />
          <div className="flex-col text-left ml-[1.5em] mt-[3em] custom-font">
            <p className="text-xl font-semibold">YAMADA TARO</p>
            <p className="text-sm mt-[0.25em]">1/1/1999</p>
          </div>
        </div>
        <div className="w-[90%] mx-auto mt-[1em] custom-font">
          <div className="mb-[0.5em]">
            <p className="font-semibold">Hometown</p>
            <p>Tokyo</p>
          </div>
          <div className="mb-[0.5em]">
            <p className="font-semibold">Favorite Countries</p>
            <p>Netherlands, Italy</p>
          </div>
          <div className="mb-[0.5em]">
            <p className="font-semibold">Favorite Foods</p>
            <p>pizza, beefsteak</p>
          </div>
          <div className="mb-[0.5em]">
            <p className="font-semibold">Where I want to go</p>
            <p>Iceland</p>
          </div>
        </div>
        <div className="flex justify-center mt-[3em] ">
          <div className="flex-col text-left  mt-[3em] custom-font">
            <p className="text-xl font-semibold">YAMADA HANA</p>
            <p className="text-sm mt-[0.25em]">1/2/1999</p>
          </div>
          <img
            src="/images/bride.jpg"
            className="w-[8em] h-[8em] ml-[1em] mr-[1.5em] rounded-3xl object-cover object-left"
            alt=""
          />
        </div>
        <div className="w-[90%] mx-auto mt-[1em] pb-[2em] custom-font">
          <div className="mb-[0.5em]">
            <p className="font-semibold">Hometown</p>
            <p>Tokyo</p>
          </div>
          <div className="mb-[0.5em]">
            <p className="font-semibold">Pastime</p>
            <p>travel</p>
          </div>
          <div className="mb-[0.5em]">
            <p className="font-semibold">Favorite Foods</p>
            <p>custard pudding, croissant</p>
          </div>
          <div className="pb-[0.5em]">
            <p className="font-semibold">Where I want to go</p>
            <p>Austria</p>
          </div>
        </div>
      </>
    );
  };
  
  export default ContentsEn;
  