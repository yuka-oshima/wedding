import Head from "next/head";
import AdminIndex from "../../../components/admin/Index";

export default function admin() {
  return (
    <>
    <Head>管理者画面</Head>
      <AdminIndex/>
    </>
  );
}