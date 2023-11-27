import { useRef, useEffect, useState } from "react";

// generate a random function between 1 and 123
type Props = { image: string };

export const RandomFox = ({ image }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [src, setSrc] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );

  useEffect(() => {
    //Nuevo observador
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSrc(image);
        }
      });
    });

    if (node.current) {
      // observe node
      observer.observe(node.current);
    }
    // desconectar
    return () => {
      observer.disconnect();
    };
  }, [image]);

  return <img ref={node} className="rounded-lg bg-gray-400" width={320} height="auto" src={src} />;
};
