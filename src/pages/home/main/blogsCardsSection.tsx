import { SingleCard } from "./SingleCard";
import { useAtom } from "jotai";
import { useParams } from "react-router-dom";
import { SearchComponent } from "./components/search";
import { blogsAtom } from "@/context/auth/jotai/searchContext.ts";
import { useEffect } from "react";
import { fetchBlogs } from "@/supabase/getBlogs";

export const CardsSection = () => {
  const { lang } = useParams();
  const [blogs, setBlogs] = useAtom(blogsAtom);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const blogsData = await fetchBlogs();
        setBlogs(blogsData || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    getBlogs();
  }, []);

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
