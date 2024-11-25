import { supabase } from "@/supabase";

export const getProfileInfo = async (id: string) => {
  return supabase.from("profiles").select("*").eq("id", id);
};
