import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { SocAvatarProps } from "./interface";

export const SocAvatar = ({ svg }: SocAvatarProps) => {
  return (
    <>
      <Avatar className="border-2 border-chart-1">
        <AvatarFallback className="bg-background">{svg}</AvatarFallback>
      </Avatar>
    </>
  );
};
