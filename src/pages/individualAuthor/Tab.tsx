import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardsSection } from "../home/main/blogsCardsSection";
import { Aboutauthor } from "./Aboutauthor";

export const Tab = () => {
  return (
    <div>
      <Tabs
        className="flex flex-col items-center justify-center"
        defaultValue="account"
      >
        <TabsList className="w-[800px]">
          <TabsTrigger className="w-[100vh]" value="account">
            Articles
          </TabsTrigger>
          <TabsTrigger className="w-[100vh]" value="password">
            About
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <CardsSection />
        </TabsContent>
        <TabsContent value="password">
          <Aboutauthor />
        </TabsContent>
      </Tabs>
    </div>
  );
};
