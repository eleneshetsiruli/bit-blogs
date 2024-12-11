import { Card } from "@/components/ui/card";
import { SingleCardProps } from "./interfaces";

export const SingleCard: React.FC<SingleCardProps> = ({
  text,
  description,
  imageUrl,
}) => {
  return (
    <Card className="flex h-80 items-center justify-between border-chart-1 bg-background p-10 lg:w-[750px]">
      <div className="flex flex-col gap-3 lg:w-[400px]">
        <h1 className="font-bold text-primary">{text}</h1>
        <p>{description}</p>
      </div>
      <img
        className="h-48 w-48 rounded-[50%] object-cover"
        src={imageUrl}
        alt=""
      />
    </Card>
  );
};
