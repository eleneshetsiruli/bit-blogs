import { AuthorsContainer } from "./author/authorsContainer";
import { PopularTags } from "./popularTags";

export const RightSideBar = () => {
  return (
    <div className="mt-[50px] flex flex-col gap-10">
      <PopularTags />
      <AuthorsContainer />
    </div>
  );
};
