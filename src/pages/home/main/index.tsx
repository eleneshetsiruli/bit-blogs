import { CardsSection } from "./blogsCardsSection";
import { RightSideBar } from "./RightSideBar";

export const Main = () => {
  return (
    <div className="flex flex-col justify-around gap-5 lg:flex-row">
      <CardsSection />
      <RightSideBar />
    </div>
  );
};
