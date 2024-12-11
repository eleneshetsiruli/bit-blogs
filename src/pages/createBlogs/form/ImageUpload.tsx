import { Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";

interface ImageUploadProps {
  control: any;
  fileInputRef: React.RefObject<HTMLInputElement>;
}

export const ImageUpload = ({ control, fileInputRef }: ImageUploadProps) => {
  return (
    <div>
      <p className="mb-2">Upload an image</p>
      <Controller
        control={control}
        name="image_url"
        render={({ field: { onChange } }) => (
          <Input
            ref={fileInputRef}
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
};
