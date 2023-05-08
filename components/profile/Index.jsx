const ProfileIndex = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center profile-bg-img">
        <div className="w-full text-center ">
          <div className="mt-[0.5em] custom-title-font font-medium text-5xl">
            Profile
          </div>
          <div className="flex ml-[2em] mt-[3em]">
            <img
              src="/groom.jpg"
              className="w-[10em] h-[10em] rounded-3xl object-cover object-left"
              alt=""
            />
            <div className="flex-col text-left ml-[1.5em] mt-[3em] custom-font">
              <p className="text-2xl font-semibold">大島 啓</p>
              <p className="mt-[0.25em]">1993年2月1日生まれ</p>
            </div>
          </div>
          <div className="w-[90%] mx-auto mt-[1em] custom-font">
            <div className="mb-[0.5em]">
              <p className="font-semibold">趣味</p>
              <p>なしよりのなし</p>
            </div>
            <div className="mb-[0.5em]">
              <p className="font-semibold">思い出の場所</p>
              <p>なしよりのなしよりのなしなしよりの</p>
            </div>
            <div className="mb-[0.5em]">
              <p className="font-semibold">学生時代の思い出</p>
              <p>なしよりのなしよりのなしな</p>
            </div>
          </div>
          {/* <div className="flex justify-center mx-[2em] mt-[1em]">
            <div className="w-[50%] text-right">
              <p>趣味：</p>
              <p>思い出の場所：</p>
              <p>学生時代の思い出：</p>
            </div>
            <div className="w-[50%] text-left">
              <p>無し！！！</p>
              <p>ありよりのあり</p>
              <p>なしよりのなしよりのなしなしよりのなしよりのなし</p>
            </div>
          </div> */}
          <div className="flex mt-[5em]">
            <div className="flex-col text-left mx-[2em] mt-[3em]">
              <p className="text-xl">名前：大島 由華</p>
              <p className="mt-[0.25em]">生年月日：1993/2/1</p>
            </div>
            <img
              src="/bride.jpg"
              className="w-[10em] h-[10em] rounded-3xl object-cover object-left"
              alt=""
            />
          </div>
          <div className="flex justify-center mx-[2em] mt-[1em]">
            <div className="w-[50%] text-right">
              <p>趣味：</p>
              <p>思い出の場所：</p>
              <p>学生時代の思い出：</p>
            </div>
            <div className="w-[50%] text-left">
              <p>無し！！！</p>
              <p>ありよりのあり</p>
              <p>なしよりのなしよりのなしなしよりのなしよりのなし</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileIndex;
