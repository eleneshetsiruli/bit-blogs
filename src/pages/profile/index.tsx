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
import { FillProfileInfoPayload } from "@/supabase/account/index.types";
import { FillProfileInfo } from "@/supabase/account";
import { useAuthContext } from "@/hooks/useContext";

export const Profile = () => {
  const [profilePayload, setProfilePayload] = useState<FillProfileInfoPayload>({
    username: "",
    full_name_ka: "",
    full_name_en: "",
    avatar_url: "",
    last_name_ka: "",
    last_name_en: "",
    telephone: "",
    id: "",
  });

  const [profileChanges, setProfileChanges] = useState({});

  const avatarOptions = ["Jack", "Jude", "Liam", "Emery", "Luis"];

  const handleAvatarChange = (selectedAvatar: string) => {
    const avatarUrl = `https://api.dicebear.com/6.x/avataaars/png?seed=${selectedAvatar}`;
    setProfilePayload((prev) => ({
      ...prev,
      avatar_url: avatarUrl,
    }));
    setProfileChanges((prev) => ({
      ...prev,
      avatar_url: avatarUrl,
    }));
  };

  const { t } = useTranslation();

  const { mutate: handleFillProfile } = useMutation({
    mutationKey: ["fill-profile-info"],
    mutationFn: FillProfileInfo,
  });

  const { user } = useAuthContext();

  const navigate = useNavigate();
  const { lang } = useParams();

  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    const updatedPayload: FillProfileInfoPayload = {
      ...profileChanges,
      id: user?.user.id || "",
    };

    handleFillProfile(updatedPayload);
    navigate("/");
  }

  return (
    <form
      onSubmit={handleSubmit}
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
            value={profilePayload.username || ""}
            onChange={(ev) => {
              const newValue = ev.target.value;
              setProfilePayload((prev) => ({
                ...prev,
                username: newValue,
              }));
              setProfileChanges((prev) => ({ ...prev, username: newValue }));
            }}
            className="border-chart-1"
          />
        </CardContent>

        <CardContent className="flex flex-col gap-2">
          <p>{t("profile-page.fullNameEn")}</p>
          <Input
            value={profilePayload.full_name_en || ""}
            onChange={(ev) => {
              const newValue = ev.target.value;
              setProfilePayload((prev) => ({
                ...prev,
                full_name_en: newValue,
              }));
              setProfileChanges((prev) => ({
                ...prev,
                full_name_en: newValue,
              }));
            }}
            className="border-chart-1"
          />
        </CardContent>

        <CardContent className="flex flex-col gap-2">
          <p>{t("profile-page.fullNameKa")}</p>
          <Input
            value={profilePayload.full_name_ka || ""}
            onChange={(ev) => {
              const newValue = ev.target.value;
              setProfilePayload((prev) => ({
                ...prev,
                full_name_ka: newValue,
              }));

              setProfileChanges((prev) => ({
                ...prev,
                full_name_ka: newValue,
              }));
            }}
            className="border-chart-1"
          />
        </CardContent>

        <CardContent className="flex flex-col gap-2">
          <p>{t("profile-page.lastNameKa")}</p>
          <Input
            value={profilePayload.last_name_ka || ""}
            onChange={(ev) => {
              const newValue = ev.target.value;
              setProfilePayload((prev) => ({
                ...prev,
                last_name_ka: newValue,
              }));
              setProfileChanges((prev) => ({
                ...prev,
                last_name_ka: newValue,
              }));
            }}
            className="border-chart-1"
          />
        </CardContent>

        <CardContent className="flex flex-col gap-2">
          <p>{t("profile-page.lastNameEn")}</p>
          <Input
            value={profilePayload.last_name_en || ""}
            onChange={(ev) => {
              const newValue = ev.target.value;
              setProfilePayload((prev) => ({
                ...prev,
                last_name_en: newValue,
              }));
              setProfileChanges((prev) => ({
                ...prev,
                last_name_en: newValue,
              }));
            }}
            className="border-chart-1"
          />
        </CardContent>

        <CardContent className="flex flex-col gap-2">
          <p>{t("profile-page.Telephone")}</p>
          <Input
            value={profilePayload.telephone || ""}
            onChange={(ev) => {
              const newValue = ev.target.value;
              setProfilePayload((prev) => ({
                ...prev,
                telephone: newValue,
              }));
              setProfileChanges((prev) => ({
                ...prev,
                telephone: newValue,
              }));
            }}
            className="border-chart-1"
          />
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

          {profilePayload.avatar_url && (
            <img
              src={profilePayload.avatar_url}
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
