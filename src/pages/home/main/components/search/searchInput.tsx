import { Input } from "@/components/ui/input";
import { setBlogsAtom } from "@/context/auth/jotai/searchContext.ts/setBlogsAtom";
import { supabase } from "@/supabase";
import { useSetAtom } from "jotai";
import { Controller, useForm } from "react-hook-form";
import { SearchValuesType } from "./interfaces";
import { useSearchParams } from "react-router-dom";

export const SearchInput = () => {
  const { control, setValue } = useForm<SearchValuesType>();
  const setBlogs = useSetAtom(setBlogsAtom);
  const [searchParams, setSearchParams] = useSearchParams();

  const fetchBlogs = async (searchValue: string) => {
    try {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("created_at", { ascending: false })
        .ilike("title_en", `%${searchValue}%`);
      if (error) throw error;

      setBlogs(data || []);

      const updatedSearchParams = new URLSearchParams(searchParams);
      if (searchValue) {
        updatedSearchParams.set("search", searchValue);
      } else {
        updatedSearchParams.delete("search");
      }
      setSearchParams(updatedSearchParams);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setValue("search", searchValue);

    fetchBlogs(searchValue);
  };

  return (
    <form>
      <Controller
        control={control}
        defaultValue={searchParams.get("search") || ""}
        name="search"
        render={({ field: { value } }) => (
          <Input
            className="italic"
            placeholder="Search by title"
            onChange={onSearchChange}
            value={value}
          />
        )}
      />
    </form>
  );
};
