const ProfileContents = () => {
  return (
    <>
      <div className="w-full h-auto flex justify-center profile-bg-img">
        <div className="w-full text-center ">
          <div className="mt-[0.5em] custom-title-font font-medium text-5xl">
            Profile
          </div>
          <div className="flex justify-center mt-[3em]">
            <img
              src="/images/groom.jpg"
              className="w-[8em] h-[8em] rounded-3xl object-cover object-left"
              alt=""
            />
            <div className="flex-col text-left ml-[1.5em] mt-[3em] custom-font">
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
              <p>ピザ、甘いもの</p>
            </div>
            <div className="mb-[0.5em]">
              <p className="font-semibold">好きな画家</p>
              <p>フェルメール</p>
            </div>
            <div className="mb-[0.5em]">
              <p className="font-semibold">行ってみたい場所</p>
              <p>ロライマ山</p>
            </div>
          </div>
          <div className="flex justify-center mt-[3em] ">
            <div className="flex-col text-left  mt-[3em] custom-font">
              <p className="text-xl font-semibold">大島 由華</p>
              <p className="text-sm mt-[0.25em]">1997年2月10日生まれ</p>
            </div>
            <img
              src="/images/bride.jpg"
              className="w-[8em] h-[8em] ml-[1em] mr-[1.5em] rounded-3xl object-cover object-left"
              alt=""
            />
          </div>
          <div className="w-[90%] mx-auto mt-[1em] mb-[2em] custom-font">
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
            <div className="mb-[0.5em]">
              <p className="font-semibold">行ってみたい場所</p>
              <p>グレートバリアリーフ</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileContents;
