import { SingleCard } from "./SingleCard";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "@/supabase/getBlogs";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

export const CardsSection = () => {
  const { lang } = useParams();

  console.log(lang);
  const {
    data: blogs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });
  if (isLoading) return <p>Loading</p>;
  if (isError) {
    toast.error("Failed to fetch blogs");
    return <p>Error loading blogs</p>;
  }

  return (
    <div className="mt-[50px] flex flex-col">
      {blogs?.map((el, i) => {
        const title = lang === "ka" ? el.title_ka : el.title_en;
        const description =
          lang === "ka" ? el.description_ka : el.description_en;
        return (
          <SingleCard
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
