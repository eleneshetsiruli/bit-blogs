import { FormEvent, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useMutation } from "@tanstack/react-query";
import { logIn } from "@/supabase/auth";

export const SignIn = () => {
  const [signInPayload, setSignInPayload] = useState({
    email: "",
    password: "",
  });
  console.log(signInPayload);

  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { lang } = useParams();
  const { t } = useTranslation();

  const { mutate: handleSignIn } = useMutation({
    mutationKey: ["logIn"],
    mutationFn: logIn,
  });

  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    if (!!signInPayload.email && !!signInPayload.password) {
      handleSignIn(signInPayload);
    }

    let formIsValid = true;
    const newErrors = { email: "", password: "" };

    if (!signInPayload.email) {
      newErrors.email = "Email is required";
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(signInPayload.email)) {
      newErrors.email = "Email is invalid";
      formIsValid = false;
    }
    if (!signInPayload.password) {
      newErrors.password = "Password is required";
      formIsValid = false;
    } else if (signInPayload.password.length < 6) {
      newErrors.password = "password must be at least 6 characters";
      formIsValid = false;
    }
    if (formIsValid) {
      navigate("/");
    }

    setErrors(newErrors);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-[100vh] w-[500px] items-center justify-center self-center bg-background"
    >
      <Card className="h-[400px] w-[600px] border-chart-1 bg-background">
        <CardHeader className="flex items-center gap-3">
          <CardTitle className="text-lg">{t("login-page.title")}</CardTitle>
          <CardDescription>{t("login-page.access")}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <p>{t("login-page.email")}</p>
          <Input
            value={signInPayload.email}
            onChange={(ev) =>
              setSignInPayload((prev) => ({ ...prev, email: ev.target.value }))
            }
            placeholder="john@example.com"
            className="border-chart-1"
          />
          <p className="text-red-600">{errors.email}</p>
        </CardContent>

        <CardContent className="flex flex-col gap-2">
          <p>{t("login-page.password")}</p>
          <Input
            value={signInPayload.password}
            onChange={(ev) =>
              setSignInPayload((prev) => ({
                ...prev,
                password: ev.target.value,
              }))
            }
            className="border-chart-1"
          />
          <p className="text-red-500">{errors.password}</p>
        </CardContent>
        <Button type="submit" className="ml-5 mr-5 w-[92%]">
          {t("login-page.login")}
        </Button>
        <CardFooter className="mt-2 flex justify-between">
          <Link to={""}>
            <span className="text-sm text-primary hover:underline">
              {t("login-page.forgot")}
            </span>
          </Link>
          <div>
            <span className="text-sm">{t("login-page.doNot")}</span>
            <Link to={`/${lang}/sign-up`}>
              <span className="ml-1 text-sm text-primary hover:underline">
                {t("login-page.signUp")}
              </span>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </form>
  );
};
