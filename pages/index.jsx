import Head from "next/head";
import { useLayoutEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const uuid = router.query.id;
//   useLayoutEffect(() => {
//     if (uuid === undefined) return;
//     router.replace(`/home/${uuid}`);
//   }, []);

  return (
    <div >
      <Head>
        <meta name="description" content="home" />
      </Head>
      <div>
        <Link href={`/home/${uuid}`}><button>ホーム画面</button></Link>
      </div>
    </div>
  );
}
