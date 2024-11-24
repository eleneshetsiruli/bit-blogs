import { supabase } from "..";
import { FillProfileInfoPayload } from "./index.types";

export const FillProfileInfo = (payload: FillProfileInfoPayload) => {
  return supabase
    .from("profiles")
    .upsert(payload)
    .throwOnError()
    .then((res) => res);
};

export const getProfileInfo = (id: string | number) => {
  return supabase.from("profiles").select("*").eq("id", id);
};
