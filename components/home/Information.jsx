import Link from "next/link";
const Information = ({ userData }) => {
  return (
    <>
      <div
        id="info"
        className="h-[44em] flex items-center justify-center bg-cover greeting-bg-img"
      >
        <div className="w-[85%] bg-white min-h-[80%] text-center rounded-xl">
          <div className="w-full mt-[3em] mb-[2em]">
            <p className="custom-title-font text-5xl font-medium tracking-wide">
              Information
            </p>
          </div>
          <div className="mt-[3em]">
            <div className="bg">
              <div className="flex-col items-center justify-center my-[1em] custom-font">
                <p>
                  クイズを用意しました
                  <br />
                  ぜひ挑戦してみてください
                  <br />
                </p>
                <p className="mt-[0.5em] font-medium">※問題は全部で3問です</p>
                <p className="text-[12px] font-medium">
                  ＊There are 3 questions in total.
                </p>
              </div>
              <div className="w-full h-[6em] mb-[2em]">
                <Link href={`/quiz/${userData._id}`}>
                  <button
                    className={`${
                      userData.status === 1
                        ? "bg-[#bebebe] cursor-not-allowed"
                        : "bg-[#716cd4d5] cursor-pointer"
                    } w-[12em] py-[0.5rem] custom-font font-semibold text-white rounded-xl`}
                    disabled={userData.status === 1}
                  >
                    Quiz
                  </button>
                </Link>
                <div className="mt-[1em]">
                  <Link href={`/answer/`}>
                    <button
                      className={`${
                        userData.status === 0
                          ? "bg-[#bebebe] cursor-not-allowed"
                          : "bg-[#716cd4d5] cursor-pointer"
                      } w-[12em] py-[0.5rem] custom-font font-semibold text-white rounded-xl`}
                      disabled={userData.status === 0}
                    >
                      Answer
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full mb-[2em]">
              <div className="custom-font mb-[1em]">
                <p>
                  プロフィールを用意しました
                  <br />
                  ぜひご覧ください
                </p>
              </div>
              <Link href="/profile">
                <button className="w-[12em] py-[0.5rem] bg-[#716cd4d5] text-white font-semibold rounded-xl custom-font">
                  Profile
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
