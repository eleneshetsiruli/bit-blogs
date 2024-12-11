import { CardsSection } from "./CardsSection";
import { RightSideBar } from "./RightSideBar";

export const Main = () => {
  return (
    <div className="flex justify-around">
      <CardsSection />
      <RightSideBar />
    </div>
  );
};
