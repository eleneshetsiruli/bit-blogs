import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { BlogsInput } from "./BlogsInput";
import { CreateBlogFormData } from "../interfaces";
import { useTranslation } from "react-i18next";
import { ContentBox } from "./ContentBox";
import { supabase } from "@/supabase";
import { useAuthContext } from "@/hooks/useContext";
import { ImageUpload } from "./ImageUpload";
import { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CreateBlogsForm = () => {
  const { control, handleSubmit, reset } = useForm<CreateBlogFormData>();
  const { t } = useTranslation();
  const { user } = useAuthContext();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const onSubmit: SubmitHandler<CreateBlogFormData> = async (data) => {
    const file = data.image_url;

    if (
      !data.title_en ||
      !data.title_ka ||
      !data.description_en ||
      !data.description_ka ||
      !file
    ) {
      toast.error("Please fill in all fields and upload an image.");
      return;
    }

    try {
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("blog_images")
        .upload(`${Date.now()}_${file.name}`, file);

      if (uploadError) {
        console.error("Error uploading image:", uploadError.message);
        toast.error(`Error uploading image: ${uploadError.message}`);
        return;
      }

      const { data: publicUrlData } = supabase.storage
        .from("blog_images")
        .getPublicUrl(uploadData?.path);

      const publicImageUrl = publicUrlData?.publicUrl;

      if (!publicImageUrl) {
        console.error("Failed to generate public URL for the uploaded image");
        toast.error("Failed to generate public URL for the uploaded image");
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
            image_url: publicImageUrl,
            user_id: user?.user.id ?? "",
          },
        ]);

      if (insertError) {
        console.error("Error inserting blog:", insertError.message);
        toast.error(`Error inserting blog: ${insertError.message}`);
      } else {
        console.log("Blog created successfully:", blogData);
        toast.success("Blog created successfully!");

        reset();
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("Unexpected error occurred");
    }
  };

  return (
    <>
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
          <ImageUpload fileInputRef={fileInputRef} control={control} />
          <Button>{t("createBlog-page.create")}</Button>
        </div>
      </form>
      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
};
