import { CardContent } from "@/components/ui/card";
import { ContentBoxProps } from "../interfaces";

export const ContentBox = ({ children }: ContentBoxProps) => {
  return <CardContent className="flex flex-col gap-2">{children}</CardContent>;
};
