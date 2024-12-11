import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
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
import { useForm } from "react-hook-form";

export const SignIn = () => {
  const navigate = useNavigate();
  const { lang } = useParams();
  const { t } = useTranslation();
  const location = useLocation();
  const { register, handleSubmit, formState } = useForm<SignInFormData>();
  const toNavigate = location?.state?.from?.pathname || "/";
  console.log(toNavigate);
  const { mutate: handleSignIn } = useMutation({
    mutationKey: ["logIn"],
    mutationFn: logIn,
    onSuccess: () => {
      navigate(toNavigate);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = (data: { email: string; password: string }) => {
    handleSignIn(data);
  };

  interface SignInFormData {
    email: string;
    password: string;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
            {...register("email", {
              required: "sign-up.required",
              pattern: { value: /\S+@\S+\.\S+/, message: "sign-up.invalid" },
            })}
            placeholder="john@example.com"
            className="border-chart-1"
          />
          {formState.errors?.email && (
            <p className="text-red-600">
              {t(formState.errors?.email?.message || "")}
            </p>
          )}
        </CardContent>

        <CardContent className="flex flex-col gap-2">
          <p>{t("login-page.password")}</p>
          <Input
            {...register("password", {
              required: "sign-up.required",
              minLength: {
                value: 6,
                message: "sign-up.min",
              },
            })}
            type="password"
            className="border-chart-1"
          />
          {formState.errors.password && (
            <p className="text-red-500">
              {t(formState.errors.password.message || "")}
            </p>
          )}

          <Button type="submit" className="w-[92%]">
            {t("login-page.login")}
          </Button>
        </CardContent>

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
