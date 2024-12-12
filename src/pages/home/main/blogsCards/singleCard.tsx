import { Card } from "@/components/ui/card";
import { SingleCardProps } from "../interfaces";
import dayjs from "dayjs";
import { Paragraph } from "@/components/cva/paragraph";
export const SingleCard: React.FC<SingleCardProps> = ({
  text,
  description,
  imageUrl,
  created,
}) => {
  const truncatedDescription =
    description.length > 200
      ? description.substring(0, 200) + "..."
      : description;

  const now = dayjs();
  const createdDate = dayjs(created);
  const isSameDay = now.isSame(createdDate, "day");
  let formattedDate;
  if (isSameDay) {
    formattedDate = createdDate.from(now);
  } else {
    formattedDate = createdDate.format("HH:mm - DD/MM/YYYY");
  }
  return (
    <Card className="flex flex-col-reverse items-center border-chart-1 bg-background p-10 lg:h-80 lg:w-[750px] lg:justify-between">
      <div className="flex w-[100%] gap-3 lg:w-[400px]">
        <h1 className="mt-2 font-bold text-primary">{text}</h1>
        <Paragraph width="medium" padding="small" color="gray">
          {truncatedDescription}
        </Paragraph>

        <img
          className="h-48 w-48 rounded-[50%] object-cover"
          src={imageUrl}
          alt="image"
        />
      </div>
      <Paragraph className="self-end">
        <span className="text-gray-500">created at</span> {formattedDate}
      </Paragraph>
    </Card>
  );
};
