import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const ProfileSvg = () => {
  return (
    <div>
      <Avatar className="h-[180px] w-[180px] border-4 border-primary">
        <AvatarFallback className="bg-muted">JD</AvatarFallback>
      </Avatar>
    </div>
  );
};
