import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const uuid = "test";
  //   useLayoutEffect(() => {
  //     if (uuid === undefined) return;
  //     router.replace(`/home/${uuid}`);
  //   }, []);

  return (
    <div>
      <Head>
        <meta name="description" content="home" />
      </Head>
      <main>
        <div>
          <Link href={`/home/${uuid}`}>
            <button>ホーム画面</button>
          </Link>
        </div>
      </main>
    </div>
  );
}
