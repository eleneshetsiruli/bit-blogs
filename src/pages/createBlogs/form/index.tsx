import { Button } from "@/components/ui/button";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { BlogsInput } from "./BlogsInput";
import { CreateBlogFormData } from "../interfaces";
import { useTranslation } from "react-i18next";
import { ContentBox } from "./ContentBox";
import { supabase } from "@/supabase";
import { Input } from "@/components/ui/input";

import { useAuthContext } from "@/hooks/useContext";

export const CreateBlogsForm = () => {
  const { control, handleSubmit } = useForm<CreateBlogFormData>();
  const { t } = useTranslation();
  const { user } = useAuthContext();

  const onSubmit: SubmitHandler<CreateBlogFormData> = (data) => {
    supabase.storage
      .from("blog_images")
      .upload(data?.image_url?.name, data?.image_url)
      .then((res) => {
        return supabase
          .from("blogs")
          .insert({
            title_en: data.title_en,
            title_ka: data.title_ka,
            description_ka: data.description_ka,
            description_en: data.description_en,
            image_url: res.data?.fullPath,
            user_id: user?.user.id,
          })
          .then((res) => console.log(res));
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-[100px] flex w-[500px] flex-col items-center justify-center self-center bg-background"
    >
      <div className="flex flex-col items-center justify-center gap-7">
        <div className="flex">
          <ContentBox>
            <p>{t("createBlog-page.titleKa")}</p>
            <BlogsInput name="title_ka" control={control} />

            <p>{t("createBlog-page.descriptionKa")}</p>
            <BlogsInput name="description_ka" control={control} />
          </ContentBox>

          <ContentBox>
            <p>{t("createBlog-page.title")}</p>
            <BlogsInput name="title_en" control={control} />

            <p>{t("createBlog-page.description")}</p>
            <BlogsInput name="description_en" control={control} />
          </ContentBox>
        </div>
        <div>
          <p className="mb-2">{t("createBlog-page.image")}</p>
          <Controller
            control={control}
            name="image_url"
            render={({ field: { onChange } }) => {
              return (
                <Input
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    onChange(file);
                  }}
                />
              );
            }}
          />
        </div>
        <Button>{t("createBlog-page.create")}</Button>
      </div>
    </form>
  );
};
