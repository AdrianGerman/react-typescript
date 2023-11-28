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
        <title>Random fox</title>
      </Head>
      <main>
        <div className=" text-center items-center justify-center flex flex-col text-white">
          <img src="fox_logo.png" alt="logo" className="m-5 w-60 h-70	" />
          <div className="text-3xl font-extrabold ...">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Generador de imagenes <br />
              random de zorros
            </span>
          </div>
          <div className="mt-10 mb-5 w-1/3 text-justify bg-slate-800 p-10">
            <p>
              Hola muy buenas querido navegante, en este sitio que acabas de
              descubrir, se genera una imagen de un ZORRO cada vez que hagas
              click en el boton :o
            </p>
            <p>
              Ya lo has de estar pensando pero esta pagina tiene truco, no son
              imagenes ilimitadas, solo son 123 imagenes diferentes que se van
              renderizando de manera aleatoria cada vez que hagas click al
              boton, de igual modo disfruta de lo que sea que hagas aqui.
            </p>
          </div>
          <button
            onClick={addNewFox}
            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Nueva imagen!
          </button>
        </div>

        {images.map(({ id, url }, index) => (
          <div
            key={id}
            className="p-4 flex flex-col justify-center items-center "
          >
            <LazyImage
              src={url}
              className="rounded-lg bg-gray-400 snap-center"
              width={420}
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
