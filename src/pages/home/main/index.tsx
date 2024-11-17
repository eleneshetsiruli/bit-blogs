import { CardsSection } from "./CardsSection";
import { RightSideBar } from "./RightSideBar";

export const Main = () => {
  return (
    <div className="flex gap-[50px]">
      <CardsSection />
      <RightSideBar />
    </div>
  );
};
