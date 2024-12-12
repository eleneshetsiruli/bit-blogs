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
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { FillProfileInfoPayload } from "@/supabase/account/index.types";
import { FillProfileInfo } from "@/supabase/account";
import { useAuthContext } from "@/hooks/useContext";
import { useForm } from "react-hook-form";

const Profile = () => {
  const { t } = useTranslation();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const { lang } = useParams();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm<FillProfileInfoPayload>({
    defaultValues: {
      username: "",
      full_name_ka: "",
      full_name_en: "",
      avatar_url: "",
      last_name_ka: "",
      last_name_en: "",
      telephone: "",
      id: user?.user.id || "Invalid username",
    },
    mode: "onChange",
  });

  const [profileChanges, setProfileChanges] = useState({});

  const avatarOptions = ["Jack", "Jude", "Liam", "Emery", "Luis"];

  const handleInputChange = (
    name: keyof FillProfileInfoPayload,
    value: string,
  ) => {
    if (value) {
      clearErrors(name);
    }

    setProfileChanges((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAvatarChange = (selectedAvatar: string) => {
    const avatarUrl = `https://api.dicebear.com/6.x/avataaars/png?seed=${selectedAvatar}`;
    setValue("avatar_url", avatarUrl);
    setProfileChanges((prev) => ({
      ...prev,
      avatar_url: avatarUrl,
    }));
  };

  const { mutate: handleFillProfile } = useMutation({
    mutationKey: ["fill-profile-info"],
    mutationFn: FillProfileInfo,
  });

  function onSubmit() {
    const updatedPayload: FillProfileInfoPayload = {
      ...profileChanges,
      id: user?.user.id || "Invalid username",
    };

    handleFillProfile(updatedPayload);
    navigate("/");
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-[100px] flex w-[500px] items-center justify-center self-center bg-background"
    >
      <Card className="h-[850px] w-[600px] border-chart-1 bg-background">
        <CardHeader className="flex items-center gap-3">
          <CardTitle className="text-lg">
            {t("profile-page.profileInfo")}
          </CardTitle>
          <CardDescription>{t("profile-page.edit")}</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-2">
          <p>{t("profile-page.username")}</p>
          <Input
            {...register("username", {
              maxLength: {
                value: 6,
                message: "profile-page.max",
              },
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "profile-page.usernameOnlyLetters",
              },
            })}
            className="border-chart-1"
            onChange={(e) => {
              handleInputChange("username", e.target.value);
            }}
          />
          {errors.username && (
            <span className="text-red-500">
              {t(errors.username.message || "")}
            </span>
          )}
        </CardContent>

        <CardContent className="flex flex-col gap-2">
          <p>{t("profile-page.fullNameEn")}</p>
          <Input
            {...register("full_name_en")}
            className="border-chart-1"
            onChange={(e) => handleInputChange("full_name_en", e.target.value)}
          />
        </CardContent>

        <CardContent className="flex flex-col gap-2">
          <p>{t("profile-page.fullNameKa")}</p>
          <Input
            {...register("full_name_ka")}
            className="border-chart-1"
            onChange={(e) => handleInputChange("full_name_ka", e.target.value)}
          />
        </CardContent>

        <CardContent className="flex flex-col gap-2">
          <p>{t("profile-page.lastNameKa")}</p>
          <Input
            {...register("last_name_ka")}
            className="border-chart-1"
            onChange={(e) => handleInputChange("last_name_ka", e.target.value)}
          />
        </CardContent>

        <CardContent className="flex flex-col gap-2">
          <p>{t("profile-page.lastNameEn")}</p>
          <Input
            {...register("last_name_en")}
            className="border-chart-1"
            onChange={(e) => handleInputChange("last_name_en", e.target.value)}
          />
        </CardContent>

        <CardContent className="flex flex-col gap-2">
          <p>{t("profile-page.Telephone")}</p>
          <Input
            {...register("telephone", {
              minLength: {
                value: 9,
                message: "profile-page.telephoneMinLength",
              },
              pattern: {
                value: /^[0-9]*$/,
                message: "profile-page.telephoneInvalid",
              },
            })}
            className="border-chart-1"
            onChange={(e) => {
              handleInputChange("telephone", e.target.value);
            }}
          />
          {errors.telephone && (
            <span className="text-red-500">
              {t(errors.telephone.message || "")}
            </span>
          )}
        </CardContent>

        <CardContent className="flex flex-col gap-4">
          <p>{t("profile-page.avatar")}</p>

          <select
            className="rounded-md border border-gray-300 p-2"
            onChange={(ev) => handleAvatarChange(ev.target.value)}
          >
            <option value="">{t("profile-page.selectAvatar")}</option>
            {avatarOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          {watch("avatar_url") && (
            <img
              src={watch("avatar_url") || ""}
              alt="Selected Avatar"
              className="h-16 w-16 rounded-full"
            />
          )}
        </CardContent>

        <Button type="submit" className="ml-5 mr-5 w-[92%]">
          {t("profile-page.save")}
        </Button>
        <CardFooter className="mt-2 flex justify-center gap-2">
          <Link to={`/${lang}/sign-in`}></Link>
        </CardFooter>
      </Card>
    </form>
  );
};
export default Profile;
