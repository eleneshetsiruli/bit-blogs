import { TitleProps } from "./interfaces";

export const Title: React.FC<TitleProps> = ({ title }) => {
  return <h1 className="text-2xl font-bold">{title}</h1>;
};
