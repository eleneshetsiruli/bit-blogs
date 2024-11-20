import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AboutCardProps } from "./interface";

export const AboutCard: React.FC<AboutCardProps> = ({ svg, title, text }) => {
  return (
    <div>
      <Card className="h-[250px] w-[350px] border-chart-1 bg-background">
        <CardHeader>
          <CardTitle className="w-[50px] fill-primary">{svg}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{title}</p>
        </CardContent>
        <CardFooter className="text-gray-400">
          <p>{text}</p>
        </CardFooter>
      </Card>
    </div>
  );
};
