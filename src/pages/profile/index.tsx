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
  });

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
    handleFillProfile({ ...profilePayload, id: user?.user?.id });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-[100vh] w-[500px] items-center justify-center self-center bg-background"
    >
      <Card className="h-[600px] w-[600px] border-chart-1 bg-background">
        <CardHeader className="flex items-center gap-3">
          <CardTitle className="text-lg">Profile info</CardTitle>

          <CardDescription>edit your profile</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-2">
          <p>username</p>
          <Input
            value={profilePayload.username}
            onChange={(ev) =>
              setProfilePayload((prev) => ({
                ...prev,
                username: ev.target.value,
              }))
            }
            className="border-chart-1"
          />
        </CardContent>

        <CardContent className="flex flex-col gap-2">
          <p>full_name_en</p>
          <Input
            value={profilePayload.full_name_en}
            onChange={(ev) =>
              setProfilePayload((prev) => ({
                ...prev,
                full_name_en: ev.target.value,
              }))
            }
            className="border-chart-1"
          />
        </CardContent>

        <CardContent className="flex flex-col gap-2">
          <p>full_name_ka</p>
          <Input
            value={profilePayload.full_name_ka}
            onChange={(ev) =>
              setProfilePayload((prev) => ({
                ...prev,
                full_name_ka: ev.target.value,
              }))
            }
            className="border-chart-1"
          />
        </CardContent>

        <CardContent className="flex flex-col gap-2">
          <p>avatar_url</p>
          <Input
            value={profilePayload.avatar_url}
            onChange={(ev) =>
              setProfilePayload((prev) => ({
                ...prev,
                avatar_url: ev.target.value,
              }))
            }
            className="border-chart-1"
          />
        </CardContent>

        <Button type="submit" className="ml-5 mr-5 w-[92%]">
          save
        </Button>
        <CardFooter className="mt-2 flex justify-center gap-2">
          <Link to={`/${lang}/sign-in`}></Link>
        </CardFooter>
      </Card>
    </form>
  );
};
