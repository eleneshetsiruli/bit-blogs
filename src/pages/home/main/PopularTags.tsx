import { techButtons } from "@/staticData";
import { Title } from "../navBar/Title";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export const PopularTags = () => {
  const { t } = useTranslation();
  return (
    <div className="shadow-custom flex w-[450px] flex-col rounded-[10px] border-2 border-chart-1 p-[10px]">
      <Title title={t("home-page.PopularTags")} />
      <div className="flex flex-wrap gap-2 border-chart-1 p-[30px]">
        {techButtons.map((el, i) => (
          <Button key={i} className="h-6">
            {el}
          </Button>
        ))}
      </div>
    </div>
  );
};
