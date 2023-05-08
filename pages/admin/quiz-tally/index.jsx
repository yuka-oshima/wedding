import Head from "next/head";
import React from "react";
import AdminIndex from "../../../components/admin/Index";

const Home = () => {
  return (
    <>
      <Head>管理者画面</Head>
      <AdminIndex />
    </>
  );
};

export default Home;
