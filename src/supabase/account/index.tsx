import { supabase } from "..";
import { FillProfileInfoPayload } from "./index.types";

export const FillProfileInfo = async (payload: FillProfileInfoPayload) => {
  return supabase
    .from("profiles")
    .upsert(payload)
    .throwOnError()
    .then((res) => res);
};
