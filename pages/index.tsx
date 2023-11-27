import { MouseEventHandler, useState } from "react";
import { Inter } from "next/font/google";
import Head from "next/head";
import { LazyImage } from "@/components/RandomFox";

// Es para la fuente de la tipografia, con la lib de google
const inter = Inter({ subsets: ["latin"] });

// El llamado a la random fox
const random = (): number => Math.floor(Math.random() * 123) + 1;

// simple unique id
const generateId = () => Math.random().toString(36).substr(2, 9);

type ImageItem = { id: string; url: string };

export default function Home() {
  const [images, setImages] = useState<Array<ImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    const newImageItem: ImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${random()}.jpg`,
    };
    setImages([...images, newImageItem]);
  };

  return (
    <div>
      <Head>
        <meta name="description" content="generate by AdrianGerman" />
        <title>Heim</title>
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">Hola tecnomundo!</h1>
        <button onClick={addNewFox}>Agregar nueva imagen</button>
        {images.map(({ id, url }) => (
          <div key={id} className="p-4">
            <LazyImage src={url} className="rounded-lg bg-gray-400" width={320} height="auto" />
          </div>
        ))}
      </main>
    </div>
  );
}
