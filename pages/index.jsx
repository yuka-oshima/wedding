import Head from "next/head";
import { useLayoutEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const uuid = router.query.id;
  useLayoutEffect(() => {
    if (uuid === undefined) return;
    router.replace(`/home/${uuid}`);
  }, []);

  return (
    <div >
      <Head>
        <meta name="description" content="home" />
      </Head>
    </div>
  );
}
