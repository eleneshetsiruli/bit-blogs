import { AuthorsContainer } from "./AuthorsContainer";
import { PopularTags } from "./PopularTags";

export const RightSideBar = () => {
  return (
    <div className="mt-[50px] flex flex-col gap-10">
      <PopularTags />
      <AuthorsContainer />
    </div>
  );
};
