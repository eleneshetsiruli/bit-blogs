import { Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";

interface ImageUploadProps {
  control: any;
}

export const ImageUpload = ({ control }: ImageUploadProps) => (
  <div>
    <p className="mb-2">Upload an image</p>
    <Controller
      control={control}
      name="image_url"
      render={({ field: { onChange } }) => (
        <Input
          type="file"
          onChange={(e) => {
            const file = e.target.files?.[0];
            onChange(file);
          }}
        />
      )}
    />
  </div>
);
