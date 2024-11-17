import { Button } from "@/components/ui/button";
import { Title } from "../navBar/Title";
import { useTranslation } from "react-i18next";
import { AuthorList } from "./AuthorList";
import { SingleCardProps } from "./interfaces";

export const SingleCard: React.FC<SingleCardProps> = ({
  image,
  author,
  text,
  tech,
}) => {
  const { t } = useTranslation();
  return (
    <div className="shadow-custom ml-[60px] flex h-[500px] w-[800px] flex-col justify-center gap-[15px] rounded-[10px] border-2 border-chart-1 p-[20px]">
      <img
        className="h-[200px] w-[100%] rounded-md object-cover"
        src={image}
        alt="image"
      />
      <Title title={t("home-page.Headline")} />
      <AuthorList author={author} />
      <p>{text}</p>
      <div className="flex gap-[20px]">
        {tech.map((el) => {
          return (
            <Button key={el} className="h-[10px]" variant="secondary">
              {el}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
