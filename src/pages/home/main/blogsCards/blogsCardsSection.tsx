import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "@/supabase/getBlogs";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { SingleCard } from "./singleCard";

export const CardsSection = () => {
  const { lang } = useParams();

  const { data: blogs, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

  if (isError) {
    toast.error("Failed to fetch blogs");
    return <p>Error loading blogs</p>;
  }

  return (
    <div className="mt-[50px] flex flex-col gap-10">
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
