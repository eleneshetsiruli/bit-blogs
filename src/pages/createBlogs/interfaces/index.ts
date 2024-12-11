import { ReactNode } from "react";

export type BlogsInputProps = {
  name: string;
  control: any;
};

export type CreateBlogFormData = {
  title_ka: string;
  description_ka: string;
  title_en: string;
  description_en: string;
  image_url: File;
  user_id: string;
};

export interface ContentBoxProps {
  children: ReactNode;
}
