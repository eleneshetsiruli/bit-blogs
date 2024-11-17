import { AuthorsContainer } from "./AuthorsContainer";
import { PopularTags } from "./PopularTags";

export const RightSideBar = () => {
  return (
    <div className="mt-[50px] flex flex-col gap-[20px]">
      <PopularTags />
      <AuthorsContainer />
    </div>
  );
};
