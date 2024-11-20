import { authorAbout } from "@/staticData";
import { Title } from "../home/navBar/Title";
import { SingleText } from "../about/SingleText";
import { Button } from "@/components/ui/button";

export const Aboutauthor = () => {
  return (
    <div>
      {authorAbout.map((el) => {
        return (
          <div className="flex h-[400px] w-[800px] flex-col gap-10 rounded-md border-2 border-chart-1 p-10">
            <Title title={el.title} />
            <SingleText text={el.text} />
            <div className="flex gap-4">
              {el.skills.map((el) => (
                <Button className="bg-customBg rounded-[20px] text-primary hover:bg-background">
                  {el}
                </Button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
