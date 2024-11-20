import { authorsData } from "@/staticData";
import { Title } from "../home/navBar/Title";
import { SingleText } from "../about/SingleText";
import { SocAvatar } from "./SocAvatar";
import { faceSvg, hubSvg, pintSvg, tviterSvg } from "./svg";
import { ProfileSvg } from "./ProfileSvg";
import { Tab } from "./Tab";
import { AuthorProps } from "./interface";

export const IndividualAuthor = () => {
  return <div>{authorsData?.map((el) => <Author data={el} />)}</div>;
};

export const Author = ({ data }: AuthorProps) => {
  return (
    <div>
      <div className="boxShadow-card flex h-[300px] items-center justify-center gap-[30px]">
        <ProfileSvg />
        <div className="flex flex-col gap-4">
          <Title title={data.name} />
          <p className="w-[600px] text-muted-foreground">
            <SingleText text="Tech enthusiast, software engineer, and avid blogger. Passionate about AI, web development, and the future of technology." />
          </p>
          <div className="flex gap-2">
            <SocAvatar svg={tviterSvg} />
            <SocAvatar svg={faceSvg} />
            <SocAvatar svg={pintSvg} />
            <SocAvatar svg={hubSvg} />
          </div>
          <div className="flex gap-6 text-muted-foreground">
            <span>{data.followers}</span>
            <span>{data.following}</span>
          </div>
        </div>
      </div>

      <Tab />
    </div>
  );
};
