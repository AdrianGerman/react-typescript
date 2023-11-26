// generate a random function between 1 and 123

type Props = { image: string };

export const RandomFox = ({ image }: Props): JSX.Element => {
  return <img className="rounded-2xl" width={320} height="auto" src={image} />;
};
