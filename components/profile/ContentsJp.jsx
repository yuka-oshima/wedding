const ContentsJp = () => {
  return (
    <>
      <div className="flex justify-center mt-[3em]">
        <img
          src="/images/groom.jpg"
          className="w-[8em] h-[8em] mr-[1em] rounded-3xl object-cover object-left"
          alt=""
        />
        <div className="flex-col text-left mt-[3em] custom-font">
          <p className="text-xl font-semibold">山田 太郎</p>
          <p className="text-sm mt-[0.25em]">1999年1月1日生まれ</p>
        </div>
      </div>
      <div className="w-[90%] mx-auto mt-[1em] custom-font">
        <div className="mb-[0.5em]">
          <p className="font-semibold">出身地</p>
          <p>東京都</p>
        </div>
        <div className="mb-[0.5em]">
          <p className="font-semibold">好きな国</p>
          <p>オランダ、イタリア</p>
        </div>
        <div className="mb-[0.5em]">
          <p className="font-semibold">好きな食べ物</p>
          <p>ピザ、ステーキ</p>
        </div>
        <div className="mb-[0.5em]">
          <p className="font-semibold">行ってみたい場所</p>
          <p>アイスランド</p>
        </div>
      </div>
      <div className="flex justify-center mt-[3em] ">
        <div className="flex-col text-left mt-[3em] custom-font">
          <p className="text-xl font-semibold">山田 花</p>
          <p className="text-sm mt-[0.25em]">1999年1月2日生まれ</p>
        </div>
        <img
          src="/images/bride.jpg"
          className="w-[8em] h-[8em] ml-[1em] mr-[1.5em] rounded-3xl object-cover object-left"
          alt=""
        />
      </div>
      <div className="w-[90%] mx-auto mt-[1em] pb-[2em] custom-font">
        <div className="mb-[0.5em]">
          <p className="font-semibold">出身地</p>
          <p>東京都</p>
        </div>
        <div className="mb-[0.5em]">
          <p className="font-semibold">趣味</p>
          <p>旅行</p>
        </div>
        <div className="mb-[0.5em]">
          <p className="font-semibold">好きな食べ物</p>
          <p>プリン、クロワッサン</p>
        </div>
        <div className="pb-[0.5em]">
          <p className="font-semibold">行ってみたい場所</p>
          <p>オーストリア</p>
        </div>
      </div>
    </>
  );
};

export default ContentsJp;
