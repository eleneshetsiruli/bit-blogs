import { Button } from "@/components/ui/button";
import { primaryButtonProps } from "./interfaces";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@/hooks/useContext";
import { useMutation } from "@tanstack/react-query";
import { logOut } from "@/supabase/auth";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "@/components/ui/avatar";
import { supabase } from "@/supabase";
import { useEffect, useState } from "react";

export const PrimaryButton: React.FC<primaryButtonProps> = ({
  title,
  variant,
}) => {
  const navigate = useNavigate();
  function handleGoToSignIn() {
    navigate("sign-in");
  }
  const [profileAvatar, setProfileAvatar] = useState("");

  const { user } = useAuthContext();

  const { mutate: handleLogOut } = useMutation({
    mutationKey: ["logOut"],
    mutationFn: logOut,
  });

  const { mutate: handleFetchAvatar } = useMutation({
    mutationKey: ["getAvatar"],
    mutationFn: (id: string | number) => getAvatar(id),

    onSuccess: (data) => {
      const avatarUrl = data?.data?.[0]?.avatar_url ?? "";
      setProfileAvatar(avatarUrl);
    },
  });

  useEffect(() => {
    if (user?.user?.id) {
      handleFetchAvatar(user.user.id);
    }
  }, [user?.user?.id]);

  return (
    <>
      {user ? (
        <Avatar>
          <AvatarImage
            onClick={() => navigate("profile-info")}
            className="w-[40px] cursor-pointer rounded-[50px] border-2 border-chart-1"
            src={profileAvatar}
          />
        </Avatar>
      ) : (
        ""
      )}

      <Button onClick={handleGoToSignIn} variant={variant}>
        {user ? <div onClick={() => handleLogOut()}>log-Out</div> : title}
      </Button>
    </>
  );
};

export const getAvatar = async (id: string | number) => {
  return supabase.from("profiles").select("*").eq("id", id);
};
