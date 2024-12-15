import { useAtom } from "jotai";
import { useParams } from "react-router-dom";
import { blogsAtom } from "@/context/auth/jotai/searchContext.ts";
import { SearchComponent } from "../components/search";
import { SingleCard } from "../SingleCard";

export const CardsSection = () => {
  const { lang } = useParams();
  const [blogs] = useAtom(blogsAtom);

  return (
    <div className="mt-[50px] flex flex-col gap-10">
      <SearchComponent />
      {blogs?.map((el, i) => {
        const title = lang === "ka" ? el.title_ka : el.title_en;
        const description =
          lang === "ka" ? el.description_ka : el.description_en;
        return (
          <SingleCard
            created={el.created_at}
            key={i}
            imageUrl={el.image_url}
            text={title}
            description={description}
          />
        );
      })}
    </div>
  );
};
