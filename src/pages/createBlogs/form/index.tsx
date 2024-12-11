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

  const onSubmit: SubmitHandler<CreateBlogFormData> = async (data) => {
    const file = data.image_url;

    if (!file) {
      console.error("No image file selected");
      return;
    }
    try {
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("blog_images")
        .upload(file.name, file);

      if (uploadError) {
        console.error("Error uploading image:", uploadError.message);
        return;
      }
      const imageUrl = uploadData?.path;

      if (!imageUrl) {
        console.error("Failed to get image URL after upload");
        return;
      }

      const { data: blogData, error: insertError } = await supabase
        .from("blogs")
        .insert([
          {
            title_en: data.title_en,
            title_ka: data.title_ka,
            description_en: data.description_en,
            description_ka: data.description_ka,
            image_url: imageUrl,
            user_id: user?.user.id ?? "",
          },
        ]);

      if (insertError) {
        console.error("Error inserting blog:", insertError.message);
      } else {
        console.log("Blog created successfully:", blogData);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
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
