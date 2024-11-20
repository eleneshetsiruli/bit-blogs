import { Title } from "../home/navBar/Title";
import { SingleText } from "./SingleText";
import { AboutCard } from "./AboutCard";
import { boltSvg, bookSvg, groupSvg } from "./svg";
import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <div className="m-[50px] flex flex-col gap-[60px] self-center pt-10">
      <div className="flex flex-col gap-5 text-center">
        <Title title="About bitBlogs" />
        <SingleText text="Empowering tech enthusiasts to share knowledge and inspire innovation." />
      </div>

      <div className="flex justify-center gap-[200px]">
        <div className="flex w-[400px] flex-col gap-5 self-center">
          <Title title="Our Mission" />
          <SingleText text="At bitBlogs, we believe in the power of shared knowledge. Our mission is to create a platform where tech enthusiasts, developers, and innovators can come together to share ideas, learn from each other, and push the boundaries of what's possible in the world of technology." />
        </div>

        <img
          className="h-[400px] rounded-md object-cover"
          src="https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=400&width=400"
          alt="image"
        />
      </div>

      <div className="mt-10 flex flex-col gap-10">
        <div className="text-center">
          <Title title="What We Offer" />
        </div>

        <div className="flex gap-6 self-center">
          <AboutCard
            svg={bookSvg}
            text="Access a wide range of articles, tutorials, and insights on the latest tech trends and best practices."
            title="Rich Content"
          />
          <AboutCard
            svg={groupSvg}
            text="Connect with like-minded individuals, share your knowledge, and grow your professional network."
            title="Vibrant Community"
          />
          <AboutCard
            svg={boltSvg}
            text="Stay ahead of the curve with content covering emerging technologies and innovative solutions."
            title="Cutting-edge Topics"
          />
        </div>
      </div>

      <div className="flex w-[1000px] flex-col gap-7 self-center rounded-md bg-muted p-[50px] text-lg">
        <Title title="Our Story" />
        <SingleText
          text="Founded in 2023, bitBlogs started as a small project by a group of passionate developers who wanted to create a space for sharing their experiences and learning from others. What began as a simple blog quickly grew into a thriving community of tech enthusiasts from all around the world.
Today, bitBlogs is proud to be a leading platform for technology-focused content, fostering innovation and collaboration in the ever-evolving world of tech."
        />
      </div>

      <div className="flex flex-col items-center gap-[20px] text-center">
        <Title title="Join Us on Our Journey" />
        <SingleText text="Whether you're a seasoned developer, a curious beginner, or somewhere in between, there's a place for you at bitBlogs." />
        <Button>Get Started Today</Button>
      </div>
    </div>
  );
};
