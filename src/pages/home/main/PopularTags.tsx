import { techButtons } from "@/staticData";
import { Title } from "../navBar/Title";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";

export const PopularTags = () => {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const language = lang === "en" || lang === "ka" ? lang : "en";
  return (
    <div className="shadow-custom flex w-[450px] flex-col rounded-[10px] border-2 border-chart-1 p-[10px]">
      <Title title={t("home-page.PopularTags")} />
      <div className="flex flex-wrap gap-2 border-chart-1 p-[30px]">
        {techButtons.map((el, i) => (
          <Button key={i} className="h-6">
            {el[language]}
          </Button>
        ))}
      </div>
    </div>
  );
};
