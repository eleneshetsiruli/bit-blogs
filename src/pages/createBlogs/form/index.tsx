import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { SubmitHandler, useForm } from "react-hook-form";
import { BlogsInput } from "./BlogsInput";
import { CreateBlogFormData } from "../interfaces";
import { useTranslation } from "react-i18next";

export const CreateBlogsForm = () => {
  const { control, handleSubmit } = useForm<CreateBlogFormData>();
  const { t } = useTranslation();
  const onSubmit: SubmitHandler<CreateBlogFormData> = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-[100px] flex w-[500px] flex-col items-center justify-center self-center bg-background"
    >
      <div className="flex">
        <CardContent className="flex flex-col gap-2">
          <p>{t("createBlog-page.titleKa")}</p>
          <BlogsInput name="title_ka" control={control} />

          <p>{t("createBlog-page.descriptionKa")}</p>
          <BlogsInput name="description_ka" control={control} />
        </CardContent>

        <CardContent className="flex flex-col gap-2">
          <p>{t("createBlog-page.title")}</p>
          <BlogsInput name="title_en" control={control} />

          <p>{t("createBlog-page.description")}</p>
          <BlogsInput name="description_en" control={control} />
        </CardContent>
      </div>
      <Button>{t("createBlog-page.create")}</Button>
    </form>
  );
};
