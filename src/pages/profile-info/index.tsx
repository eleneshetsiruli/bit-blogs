import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useAuthContext } from "@/hooks/useContext";
import { getProfileInfo } from "@/supabase/account";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState, useTransition } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export const ProfileInfo = () => {
  const [profileData, setProfileData] = useState([]);

  const { user } = useAuthContext();
  const { mutate: fetchProfileInfo } = useMutation({
    mutationKey: ["fetchprofileInfo"],
    mutationFn: (id) => getProfileInfo(id),
    onSuccess: (data) => {
      setProfileData(data.data);
    },
  });

  useEffect(() => {
    if (user?.user?.id) {
      fetchProfileInfo(user.user.id);
    }
  }, [user?.user?.id, fetchProfileInfo]);

  return (
    <div>
      {profileData.map((el) => (
        <ProfileCard key={el.id} data={el} />
      ))}
    </div>
  );
};

export const ProfileCard = ({ data }) => {
  const { t } = useTranslation();
  const { lang } = useParams();

  const fullName = data[`full_name_${lang}`] || data.full_name_en;
  const lastName = data[`last_name_${lang}`] || data.last_name_en;

  return (
    <div className="mt-[50px] flex w-[100vh] items-center justify-center">
      <img className="w-[300px]" src={data.avatar_url} alt="avatar" />
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
