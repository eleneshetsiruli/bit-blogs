export interface AuthorsDataProps {
  name: string;
  info: string;
  followers: string;
  following: string;
}

export interface AuthorProps {
  data: AuthorsDataProps;
}
export interface SocAvatarProps {
  svg: JSX.Element;
}
