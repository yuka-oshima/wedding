import useGetUsers from "./api/useGetUsers";

const AnswerGuestTable = () => {
  const [, users] = useGetUsers();

  //usersのcorrectが5の人数を数える
  const correctCount1 = users.filter((user) => user.correct === 1).length;
  const correctCount2 = users.filter((user) => user.correct === 2).length;
  const correctCount3 = users.filter((user) => user.correct === 3).length;
  const correctCount4 = users.filter((user) => user.correct === 4).length;
  const correctCount5 = users.filter((user) => user.correct === 5).length;

  return (
    <>
      <div className="overflow-x-auto max-h-[30rem] border-b">
        <table className="table-fixed w-full">
          <thead className="sticky top-0 bg-[#727272]">
            <tr className="border text-white">
              <th className="border-r">名前</th>
              <th className="border-r">正解数</th>
              <th>回答状況</th>
            </tr>
          </thead>
          <tbody>
            {users.map((guest) => (
              <tr
                key={guest._id}
                className={`${
                  guest.correct === 5 ? "bg-[#c9c8c8]" : ""
                } border`}
              >
                <td className={"border"}>{guest.formalName}</td>
                <td className={"border"}>
                  {guest.correct === undefined ? "---" : guest.correct}
                </td>
                <td
                  className={
                    guest.status === 1 ? "border" : "text-blue-500 border"
                  }
                >
                  {guest.status === 1 ? "済み" : "未回答"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-[1em] mb-[1.5em]">
        <div className="font-semibold">全問正解者数</div>
        <p className="font-semibold border-b">{correctCount5}人</p>
      </div>
      <div className="mt-[1em] mb-[1.5em]">
        <div>4問正解者数</div>
        <p className="border-b">{correctCount4}人</p>
      </div>
      <div className="mt-[1em] mb-[1.5em]">
        <div>3問正解者数</div>
        <p className="border-b">{correctCount3}人</p>
      </div>
      <div className="mt-[1em] mb-[1.5em]">
        <div>2問正解者数</div>
        <p className="border-b">{correctCount2}人</p>
      </div>
      <div className="mt-[1em] mb-[1.5em]">
        <div>1問正解者数</div>
        <p className="border-b">{correctCount1}人</p>
      </div>
    </>
  );
};

export default AnswerGuestTable;
