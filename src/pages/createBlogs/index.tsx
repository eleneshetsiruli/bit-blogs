import { useAuthContext } from "@/hooks/useContext";
import { CreateBlogsForm } from "./form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export const CreateBlogs = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const { lang } = useParams();
  const token = user?.access_token;

  useEffect(() => {
    if (!token) {
      navigate(`/${lang}/logIn`);
    }
  }, [token, navigate, lang]);
  if (!token) {
    return null;
  }

  return <CreateBlogsForm />;
};
