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
          <p className="text-xl font-semibold">大島 啓</p>
          <p className="text-sm mt-[0.25em]">1993年2月1日生まれ</p>
        </div>
      </div>
      <div className="w-[90%] mx-auto mt-[1em] custom-font">
        <div className="mb-[0.5em]">
          <p className="font-semibold">出身地</p>
          <p>東京都練馬区</p>
        </div>
        <div className="mb-[0.5em]">
          <p className="font-semibold">好きな国</p>
          <p>オランダ、イタリア</p>
        </div>
        <div className="mb-[0.5em]">
          <p className="font-semibold">好きな食べ物</p>
          <p>ピザ、ステーキ、甘いもの</p>
        </div>
        <div className="mb-[0.5em]">
          <p className="font-semibold">好きな画家</p>
          <p>フェルメール</p>
        </div>
        <div className="mb-[0.5em]">
          <p className="font-semibold">行ってみたい場所</p>
          <p>ロライマ山、アイスランド</p>
        </div>
      </div>
      <div className="flex justify-center mt-[3em] ">
        <div className="flex-col text-left mt-[3em] custom-font">
          <p className="text-xl font-semibold">大島 由華</p>
          <p className="text-sm mt-[0.25em]">1997年2月10日生まれ</p>
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
          <p>埼玉県加須市</p>
        </div>
        <div className="mb-[0.5em]">
          <p className="font-semibold">趣味</p>
          <p>旅行、ダイビング</p>
        </div>
        <div className="mb-[0.5em]">
          <p className="font-semibold">好きなアーティスト</p>
          <p>Ed Sheeran、嵐</p>
        </div>
        <div className="mb-[0.5em]">
          <p className="font-semibold">好きな食べ物</p>
          <p>明太子、プリン、クロワッサン</p>
        </div>
        <div className="pb-[0.5em]">
          <p className="font-semibold">行ってみたい場所</p>
          <p>グレートバリアリーフ</p>
        </div>
      </div>
    </>
  );
};

export default ContentsJp;
