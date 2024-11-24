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
  supabase.auth.signInWithPassword({ email, password }).then((res) => {
    if (
      res?.error &&
      res.error.status &&
      (res.error.status < 200 || res.error.status >= 300)
    ) {
      throw new Error("Auth");
    }
    return res;
  });
};

export const logOut = () => {
  return supabase.auth.signOut();
};
