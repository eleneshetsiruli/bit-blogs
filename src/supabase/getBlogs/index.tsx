// import { supabase } from "@/supabase";
// import { Blog } from "./inrefaces";

// export const fetchBlogs = async (): Promise<Blog[]> => {
//   const { data, error } = await supabase
//     .from("blogs")
//     .select("*")
//     .order("created_at", { ascending: false });

//   if (error) {
//     throw new Error(error.message);
//   }

//   return data as Blog[];
// };
