import { supabase } from "..";

export const register = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  supabase.auth.signUp({ email, password });
};

export const logIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  supabase.auth.signInWithPassword({ email, password });
};
