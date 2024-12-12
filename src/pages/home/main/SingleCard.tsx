import { Card } from "@/components/ui/card";
import { SingleCardProps } from "./interfaces";

export const SingleCard: React.FC<SingleCardProps> = ({
  text,
  description,
  imageUrl,
}) => {
  const truncatedDescription =
    description.length > 200
      ? description.substring(0, 200) + "..."
      : description;
  return (
    <Card className="flex flex-col-reverse items-center border-chart-1 bg-background p-10 lg:h-80 lg:w-[750px] lg:flex-row lg:justify-between">
      <div className="flex w-[100%] flex-col gap-3 lg:w-[400px]">
        <h1 className="mt-2 font-bold text-primary">{text}</h1>
        <p>{truncatedDescription}</p>
      </div>
      <img
        className="h-48 w-48 rounded-[50%] object-cover"
        src={imageUrl}
        alt="image"
      />
    </Card>
  );
};
