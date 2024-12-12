import { Authors } from "@/staticData";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { Title } from "../../../navBar/Title";

export const AuthorsContainer = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <div className="shadow-custom flex h-[300px] flex-col gap-8 rounded-[10px] border-2 border-chart-1 p-[10px] lg:w-[450px]">
      <Title title={t("home-page.FeauteredAuthors")} />
      <div className="flex flex-col justify-center gap-[20px]">
        {Authors.map((el, i) => (
          <div key={i} className="flex gap-[20px]">
            <div className="h-[40px] w-[40px] cursor-pointer rounded-[50px] bg-gray-200"></div>
            <div>
              <Link to={`/${lang}/ind-author`}>
                <h1 className="cursor-pointer font-bold hover:underline">
                  {el.name}
                </h1>
              </Link>
              <span>{el.work}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
