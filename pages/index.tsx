import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="description" content="generate by AdrianGerman" />
        <title>Heim</title>
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">Hola tecnomundo!</h1>
      </main>
    </div>
  );
}
