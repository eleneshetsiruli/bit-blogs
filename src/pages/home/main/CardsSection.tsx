import { cardsStaticData } from "@/staticData";
import { SingleCard } from "./SingleCard";

export const CardsSection = () => {
  return (
    <div className="mt-[50px] flex flex-col gap-[50px]">
      {cardsStaticData.map((el) => {
        return (
          <SingleCard
            image={el.image}
            author={el.author}
            text={el.text}
            tech={el.tech}
          />
        );
      })}
    </div>
  );
};
