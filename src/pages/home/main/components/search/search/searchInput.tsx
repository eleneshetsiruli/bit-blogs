import { Input } from "@/components/ui/input";
import { setBlogsAtom } from "@/context/auth/jotai/searchContext.ts/setBlogsAtom";
import { supabase } from "@/supabase";
import { useSetAtom } from "jotai";
import { Controller, useForm } from "react-hook-form";
import { SearchValuesType } from "../interfaces";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import qs from "qs";
import { useTranslation } from "react-i18next";

export const SearchInput = () => {
  const { control, setValue, watch } = useForm<SearchValuesType>();
  const setBlogs = useSetAtom(setBlogsAtom);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = watch("search", searchParams.get("search") || "");
  const debouncedSearchValue = useDebounce(searchValue, 300);
  const { t } = useTranslation();
  const fetchFilteredBlogs = async (searchValue: string) => {
    try {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("created_at", { ascending: false })
        .or(
          `title_en.ilike.%${searchValue}%,title_ka.ilike.%${searchValue}%`, // Combine both fields
        );
      // .ilike("title_en", `%${searchValue}%`);
      if (error) throw error;

      setBlogs(data || []);

      const queryString = qs.stringify(
        { search: searchValue || "" },
        { skipNulls: true },
      );
      setSearchParams(queryString);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setValue("search", searchValue);
    fetchFilteredBlogs(searchValue);
  };

  useEffect(() => {
    fetchFilteredBlogs(debouncedSearchValue);
  }, [debouncedSearchValue]);

  useEffect(() => {
    const parsedParams = qs.parse(searchParams.toString());
    const searchValue =
      typeof parsedParams.search === "string" ? parsedParams.search : "";
    setValue("search", searchValue);
    fetchFilteredBlogs(searchValue);
  }, []);

  return (
    <form>
      <Controller
        control={control}
        defaultValue={searchParams.get("search") || ""}
        name="search"
        render={({ field: { value } }) => (
          <Input
            className="italic"
            placeholder={t("createBlog-page.search")}
            onChange={onSearchChange}
            value={value}
          />
        )}
      />
    </form>
  );
};
