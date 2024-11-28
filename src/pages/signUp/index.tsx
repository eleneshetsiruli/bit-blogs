import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { registerSupabese } from "@/supabase/auth";

interface SignUpFormData {
  username: string;
  email: string;
  password: string;
  repassword: string;
}

export function SignUp() {
  const { register, handleSubmit, formState } = useForm<SignUpFormData>();

  const onSubmit: SubmitHandler<SignUpFormData> = (fieldValues) => {
    handleRegister(fieldValues);
  };

  const { t } = useTranslation();
  const { lang } = useParams();

  const { mutate: handleRegister } = useMutation({
    mutationKey: ["register"],
    mutationFn: registerSupabese,
  });

  const erorBorder = formState.errors?.username
    ? "border-red-700"
    : "border-chart-1";

  return (
    <form
      className="flex items-center justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Card className="mt-20 flex h-[100vh] w-[600px] flex-col gap-9 border-chart-1 bg-background">
        <CardHeader className="flex items-center gap-3">
          <CardTitle className="text-lg">{t("sign-up.title")}</CardTitle>
          <CardDescription>{t("sign-up.text")}</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-10">
          <div className="flex gap-2">
            <p className="w-[100px]">{t("sign-up.name")}</p>
            <div className="flex w-[400px] flex-col items-center justify-center gap-2">
              <Input
                {...register("username", { required: "sign-up.required" })}
                className={erorBorder}
              />

              {formState.errors?.username && (
                <p>{t(formState.errors.username.message || "")}</p>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            <p className="w-[100px]">{t("sign-up.Email")}</p>
            <div className="flex w-[400px] flex-col items-center justify-center gap-2">
              <Input
                className={formState.errors.email && "border-red-600"}
                type="email"
                {...register("email", {
                  required: "sign-up.required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "sign-up.invalid",
                  },
                })}
              />
              {formState.errors.email && (
                <p>{t(formState.errors.email.message || "")}</p>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            <p className="w-[100px]">{t("sign-up.Password")}</p>
            <div className="flex w-[400px] flex-col items-center justify-center gap-2">
              <Input
                className={formState.errors.password ? "border-red-700" : ""}
                type="password"
                {...register("password", {
                  required: "sign-up.required",
                  minLength: {
                    value: 6,
                    message: "sign-up.min",
                  },
                })}
              />
              {formState.errors.password && (
                <span> {t(formState.errors.password.message || "")}</span>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            <p className="w-[100px]">{t("sign-up.confirm")}</p>
            <div className="flex w-[400px] flex-col items-center justify-center gap-2">
              <Input
                className={formState.errors.password ? "border-red-700" : ""}
                type="password"
                {...register("repassword", {
                  required: "sign-up.required",
                  minLength: {
                    value: 6,
                    message: "sign-up.min",
                  },
                })}
              />
              {formState.errors.repassword && (
                <span>{t(formState.errors.repassword.message || "")}</span>
              )}
            </div>
          </div>

          <Button> {t("sign-up.signUp")}</Button>
        </CardContent>

        <CardFooter className="mt-2 flex justify-center gap-2">
          <span>{t("sign-up.alrady")}</span>
          <Link to={`/${lang}/sign-in`}>
            <span className="text-primary">{t("sign-up.logIn")}</span>
          </Link>
        </CardFooter>
      </Card>
    </form>
  );
}
