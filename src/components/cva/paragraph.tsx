import { cva, VariantProps } from "class-variance-authority";
import classNames from "classnames";

const paragraph = cva("text-base", {
  variants: {
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    },
    weight: {
      normal: "font-normal",
      bold: "font-bold",
      light: "font-light",
    },
    color: {
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent",
      gray: "text-gray-500",
    },
    padding: {
      small: "p-2",
      medium: "p-4",
      large: "p-6",
    },
    width: {
      small: "w-[200px]",
      medium: "w-[400px]",
      large: "w-[600px]",
    },
  },
  defaultVariants: {
    size: "medium",
    weight: "normal",
    color: "primary",
  },
});

interface ParagraphProps extends VariantProps<typeof paragraph> {
  className?: string;
  children: React.ReactNode;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  className,
  children,
  ...props
}) => {
  return <p className={classNames(paragraph(props), className)}>{children}</p>;
};
