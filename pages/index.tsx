import { useState } from "react";
import { Inter } from "next/font/google";
import Head from "next/head";
import { RandomFox } from "@/components/RandomFox";

// Es para la fuente de la tipografia, con la lib de google
const inter = Inter({ subsets: ["latin"] });

// El llamado a la random fox
const random = (): number => Math.floor(Math.random() * 123) + 1;

export default function Home() {
  const [images, setImages] = useState<Array<string>>([
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
  ]);
  return (
    <div>
      <Head>
        <meta name="description" content="generate by AdrianGerman" />
        <title>Heim</title>
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">Hola tecnomundo!</h1>
        {images.map((image, index) => (
          <div key={index} className="p-4">
            <RandomFox image={image} />
          </div>
        ))}
      </main>
    </div>
  );
}
