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
import { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { register } from "@/supabase/auth";

export const SignUp = () => {
  const [registerPayload, setRegisterPayload] = useState({
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const { t } = useTranslation();

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });

  const { mutate: handleRegister } = useMutation({
    mutationKey: ["register"],
    mutationFn: register,
  });

  const navigate = useNavigate();
  const { lang } = useParams();

  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    if (!!registerPayload.email && !!registerPayload.password) {
      handleRegister(registerPayload);
    }

    let formIsValid = true;
    const newErrors = {
      email: "",
      password: "",
      name: "",
      confirmPassword: "",
    };

    if (!registerPayload.email) {
      newErrors.email = "Email is required";
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(registerPayload.email)) {
      newErrors.email = "Email is invalid";
      formIsValid = false;
    }
    if (!registerPayload.password) {
      newErrors.password = "Password is required";
      formIsValid = false;
    } else if (registerPayload.password.length < 6) {
      newErrors.password = "password must be at least 6 characters";
      formIsValid = false;
    }

    if (!name) {
      newErrors.name = "Password is required";
      formIsValid = false;
    } else if (name.length < 4) {
      newErrors.name = "name must be at least 4 characters";
      formIsValid = false;
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
      formIsValid = false;
    } else if (confirmPassword !== registerPayload.password) {
      newErrors.confirmPassword = "Passwords do not match";
      formIsValid = false;
    }

    if (formIsValid) {
      navigate(`/${lang}/sign-in`);
    }

    setErrors(newErrors);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-[100vh] w-[500px] items-center justify-center self-center bg-background"
    >
      <Card className="h-[600px] w-[600px] border-chart-1 bg-background">
        <CardHeader className="flex items-center gap-3">
          <CardTitle className="text-lg">{t("sign-up.title")}</CardTitle>

          <CardDescription>{t("sign-up.text")}</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-2">
          <p>{t("sign-up.name")}</p>
          <Input
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            placeholder="john Doe"
            className="border-chart-1"
          />
          <p className="text-red-600">{errors.name}</p>
        </CardContent>

        <CardContent className="flex flex-col gap-2">
          <p>{t("sign-up.Email")}</p>
          <Input
            type="email"
            value={registerPayload.email}
            onChange={(ev) =>
              setRegisterPayload((prev) => ({
                ...prev,
                email: ev.target.value,
              }))
            }
            placeholder="john@example.com"
            className="border-chart-1"
          />
          <p className="text-red-600">{errors.email}</p>
        </CardContent>

        <CardContent className="flex flex-col gap-2">
          <p>{t("sign-up.Password")}</p>
          <Input
            value={registerPayload.password}
            type="password"
            onChange={(ev) =>
              setRegisterPayload((prev) => ({
                ...prev,
                password: ev.target.value,
              }))
            }
            className="border-chart-1"
          />
          <p className="text-red-500">{errors.password}</p>
        </CardContent>

        <CardContent className="flex flex-col gap-2">
          <p>{t("sign-up.confirm")}</p>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
              setConfirmPassword(ev.target.value)
            }
            className="border-chart-1"
          />
          <p className="text-red-500">{errors.confirmPassword}</p>
        </CardContent>

        <Button type="submit" className="ml-5 mr-5 w-[92%]">
          {t("sign-up.signUp")}
        </Button>
        <CardFooter className="mt-2 flex justify-center gap-2">
          <span>{t("sign-up.alrady")}</span>
          <Link to={`/${lang}/sign-in`}>
            <span className="text-primary">{t("sign-up.logIn")}</span>
          </Link>
        </CardFooter>
      </Card>
    </form>
  );
};
