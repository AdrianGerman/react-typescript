import { useRef } from "react";

// generate a random function between 1 and 123
type Props = { image: string };

export const RandomFox = ({ image }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);

  return <img ref={node} className="rounded-lg" width={320} height="auto" src={image} />;
};
