import { useRef, useEffect, useState, ImgHTMLAttributes } from "react";

// generate a random function between 1 and 123
type LazyImageProps = { src: string,   onLazyLoad?: (img: HTMLImageElement) => void;
};

type ImageNative = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProps & ImageNative;

export function LazyImage({src, onLazyLoad, ...imgProps }: Props): JSX.Element {
  const node = useRef<HTMLImageElement>(null);
  const [currentSrc, setCurrentSrc] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );

  useEffect(() => {
    //Nuevo observador
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSrc(src);
          if (typeof onLazyLoad === "function") {
            onLazyLoad(node.current);
          }
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
  }, [src, onLazyLoad]);

  return <img ref={node} src={currentSrc} {...imgProps} />;
};
