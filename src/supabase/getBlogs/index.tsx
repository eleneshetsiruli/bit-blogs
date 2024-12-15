import { supabase } from "..";
import { Blog } from "./inrefaces";

export const fetchBlogs = async (
  setBlogs: (blogs: Blog[]) => void,
): Promise<Blog[]> => {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  if (data) {
    setBlogs(data as Blog[]);
  }

  return data as Blog[];
};
