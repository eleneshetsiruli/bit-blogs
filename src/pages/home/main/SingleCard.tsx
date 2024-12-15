import { Card } from "@/components/ui/card";
import { Paragraph } from "@/components/cva/paragraph";
import { createdTimeUpload } from "./blogsCards/created/createdTimeUpload";
import { SingleCardProps } from "./blogsCards/interfaces";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

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

  const { lang } = useParams();
  console.log(lang);
  const formattedDate = createdTimeUpload(created, lang);
  const { t } = useTranslation();
  return (
    <>
      <Card className="flex flex-col-reverse items-center border-chart-1 bg-background p-10 lg:h-80 lg:w-[750px] lg:flex-col lg:justify-between">
        <div className="flex">
          <div className="flex w-[100%] flex-col gap-3 lg:w-[400px]">
            <Paragraph>{text}</Paragraph>
            <Paragraph color="gray">{truncatedDescription}</Paragraph>
          </div>
          <img
            className="h-48 w-48 rounded-[50%] object-cover"
            src={imageUrl}
            alt="image"
          />
        </div>
        <Paragraph size="small" className="self-end">
          <span className="p-2 italic text-gray-600">
            {t("createBlog-page.created")}
          </span>
          {formattedDate}
        </Paragraph>
      </Card>
    </>
  );
};
