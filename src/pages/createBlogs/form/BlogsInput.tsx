import { Input } from "@/components/ui/input";
import { Controller } from "react-hook-form";
import { BlogsInputProps } from "../interfaces";

export const BlogsInput = ({ name, control }: BlogsInputProps) => {
  return (
    <Controller
      control={control}
      defaultValue=""
      name={name}
      render={({ field: { onChange, value } }) => {
        return <Input onChange={onChange} value={value} />;
      }}
    />
  );
};
