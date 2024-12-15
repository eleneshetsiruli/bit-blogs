import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "@/supabase/getBlogs";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { SingleCard } from "./singleCard";
import React from "react";

const CardsSectionComponent = () => {
  const { lang } = useParams();

  const { data: blogs, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: () => fetchBlogs(() => {}),
  });

  if (isError) {
    toast.error("Failed to fetch blogs");
    return <p>Error loading blogs</p>;
  }

  return (
    <div className="mt-[50px] flex flex-col gap-10">
      {blogs?.map((el) => {
        const title = lang === "ka" ? el.title_ka : el.title_en;
        const description =
          lang === "ka" ? el.description_ka : el.description_en;
        return (
          <SingleCard
            created={el.created_at}
            key={el.user_id}
            imageUrl={el.image_url}
            text={title}
            description={description}
          />
        );
      })}
    </div>
  );
};
export const CardsSection = React.memo(CardsSectionComponent);
