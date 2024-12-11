export interface cardProps {
  keys: string;
  image: string;
  author: [];
  text: string;
  tech: [];
}

export interface Author {
  name: string;
  date: string;
  read: string;
}

export interface Card {
  id: number;
  title: string;
  image: string;
  author: Author[];
  text: string;
  tech: string[];
}

export interface SingleCardProps {
  text: string;
  description: string;
  imageUrl: string;
}
