import { Button } from "@/components/ui/button";
import { primaryButtonProps } from "./interfaces";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@/hooks/useContext";
import { useMutation } from "@tanstack/react-query";
import { logOut } from "@/supabase/auth";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "@/components/ui/avatar";

export const PrimaryButton: React.FC<primaryButtonProps> = ({
  title,
  variant,
}) => {
  const navigate = useNavigate();
  function handleGoToSignIn() {
    navigate("sign-in");
  }

  const { user } = useAuthContext();

  const { mutate: handleLogOut } = useMutation({
    mutationKey: ["logOut"],
    mutationFn: logOut,
  });

  return (
    <>
      {user ? (
        <Avatar>
          <AvatarImage
            onClick={() => navigate("profile-info")}
            className="w-[40px] cursor-pointer rounded-[50px] border-2 border-chart-1"
            src="https://api.dicebear.com/9.x/adventurer/svg?seed=Liliana"
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
