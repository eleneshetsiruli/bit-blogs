import { Authors } from "@/staticData";
import { Title } from "../navBar/Title";
import { useTranslation } from "react-i18next";

export const AuthorsContainer = () => {
  const { t } = useTranslation();
  return (
    <div className="shadow-custom flex h-[300px] w-[450px] flex-col gap-8 rounded-[10px] border-2 border-chart-1 p-[10px]">
      <Title title={t("home-page.FeauteredAuthors")} />
      <div className="flex flex-col justify-center gap-[20px]">
        {Authors.map((el, i) => (
          <div key={i} className="flex gap-[20px]">
            <div className="h-[40px] w-[40px] cursor-pointer rounded-[50px] bg-gray-200"></div>
            <div>
              <h1 className="font-bold">{el.name}</h1>
              <span>{el.work}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
