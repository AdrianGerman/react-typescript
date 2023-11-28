import { MouseEventHandler, useState } from "react";
import { Inter } from "next/font/google";
import Head from "next/head";
import { random } from "lodash";
import { LazyImage } from "@/components/RandomFox";

// random number from 1 to 122
const myRandom = () => random(1, 122);

// Es para la fuente de la tipografia, con la lib de google
const inter = Inter({ subsets: ["latin"] });

// El llamado a la random fox
// const random = (): number => Math.floor(Math.random() * 123) + 1;

// simple unique id
const generateId = () => Math.random().toString(36).substr(2, 9);

export default function Home() {
  const [images, setImages] = useState<Array<IFoxImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    const newImageItem: IFoxImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${myRandom()}.jpg`,
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
        {images.map(({ id, url }, index) => (
          <div key={id} className="p-4">
            <LazyImage
              src={url}
              className="rounded-lg bg-gray-400"
              width={320}
              height="auto"
              onLazyLoad={(img) => {
                console.log(`Image #${index + 1} cargada. Nodo:`, img);
              }}
            />
          </div>
        ))}
      </main>
    </div>
  );
}
