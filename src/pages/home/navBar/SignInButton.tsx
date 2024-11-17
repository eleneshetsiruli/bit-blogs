import { Button } from "@/components/ui/button";
import { primaryButtonProps } from "./interfaces";
import { useNavigate } from "react-router-dom";

export const PrimaryButton: React.FC<primaryButtonProps> = ({
  title,
  variant,
}) => {
  const navigate = useNavigate();
  function handleGoToSignIn() {
    navigate("sign-in");
  }
  return (
    <Button onClick={handleGoToSignIn} variant={variant}>
      {title}
    </Button>
  );
};
