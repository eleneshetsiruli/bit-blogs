import { useAuthContext } from "@/hooks/useContext";
import { getProfileInfo } from "@/supabase/account";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";

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
  return <div>{data.full_name_en}</div>;
};
