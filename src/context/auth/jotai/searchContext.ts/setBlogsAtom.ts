import { atom } from "jotai";
import { blogsAtom } from ".";

export const setBlogsAtom = atom(
  (get) => get(blogsAtom),
  (get, set, newBlogs: any[]) => set(blogsAtom, newBlogs),
);
