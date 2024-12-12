import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useAuthContext } from "@/hooks/useContext";

import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { getProfileInfo } from "./getProfileInfo";

type Profile = {
  id: string;
  avatar_url: string | null;
  full_name: string | null;
  last_name?: string | null;
  telephone?: string | null;
};

const ProfileInfo = () => {
  const [profileData, setProfileData] = useState<Profile[]>([]);

  const { user } = useAuthContext();
  const { mutate: fetchProfileInfo } = useMutation({
    mutationKey: ["fetchprofileInfo"],
    mutationFn: (id: string) => getProfileInfo(id),
    onSuccess: (data) => {
      setProfileData(data.data || []);
    },
  });

  useEffect(() => {
    if (user?.user?.id) {
      fetchProfileInfo(user.user.id);
    }
  }, [user?.user?.id, fetchProfileInfo]);

  return (
    <div>{profileData?.map((el) => <ProfileCard key={el.id} data={el} />)}</div>
  );
};

export const ProfileCard: React.FC<{ data: Profile }> = ({ data }) => {
  const { t } = useTranslation();
  const { lang } = useParams();

  const fullNameField = `full_name_${lang}` as keyof Profile;
  const lastNameField = `last_name_${lang}` as keyof Profile;

  const fullName = data[fullNameField] || data.full_name;
  const lastName = data[lastNameField] || data.last_name;

  return (
    <div className="mt-[50px] flex w-[100vh] items-center justify-center">
      <img className="w-[300px]" src={data.avatar_url || ""} alt="avatar" />
      <div className="flex w-[400px] flex-col items-center justify-center gap-[20px] text-center">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel> {t("profile-page.name")}</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>{fullName}</ResizablePanel>
        </ResizablePanelGroup>

        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>{t("profile-page.lastName")}</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>{lastName}</ResizablePanel>
        </ResizablePanelGroup>

        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>{t("profile-page.Telephone")}</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>{data.telephone}</ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};
export default ProfileInfo;
