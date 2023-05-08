import React from "react";
import AnswerGuestTable from "./AnswerGuestTable";

const AdminIndex = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[85%] text-center ">
        <div className="w-full my-[1em] text-2xl">クイズ正答管理画面</div>
        <div>
          <AnswerGuestTable />
        </div>
      </div>
    </div>
  );
};

export default AdminIndex;
