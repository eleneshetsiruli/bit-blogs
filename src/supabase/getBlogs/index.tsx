import { supabase } from "@/supabase";

export const fetchBlogs = async () => {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false });
  console.log(data);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
