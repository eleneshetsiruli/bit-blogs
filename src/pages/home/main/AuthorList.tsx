import { Author } from "./interfaces";

export const AuthorList: React.FC<{ author: Author[] }> = ({ author }) => {
  return (
    <>
      {author.map((el, index) => {
        return (
          <span key={index} className="flex gap-10">
            <span>{el.name}</span>
            <li>{el.date}</li>
            <li>{el.read}</li>
          </span>
        );
      })}
    </>
  );
};
