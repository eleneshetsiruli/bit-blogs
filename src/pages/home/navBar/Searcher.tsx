"use client";

import * as React from "react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const frameworks = [
  {
    value: "AI",
    label: "AI",
  },
  {
    value: "JavaScript",
    label: "JavaScript",
  },
  {
    value: "React",
    label: "React",
  },
  {
    value: "TypeScript",
    label: "TypeScript",
  },
  {
    value: "Web Development",
    label: "Web Development",
  },
];
const authors = [
  {
    value: "Alice Johnson",
    label: "Alice Johnson",
  },
  {
    value: "Bob Williams",
    label: "Bob Williams",
  },
  {
    value: "Eva Brown",
    label: "Eva Brown",
  },

  {
    value: "Jone Doe",
    label: "Jone Doe",
  },
  {
    value: "John Smith",
    label: "John Smith",
  },
];

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="search"
          role="combobox"
          aria-expanded={open}
          className="w-[30px] border-none"
        >
          {value ? (
            frameworks.find((framework) => framework.value === value)?.label
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                className="fill-current text-secondary-foreground"
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
              />
            </svg>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="absolute top-3 w-[400px] bg-background p-0">
        <Command>
          <CommandInput placeholder="Type to Search" />
          <CommandList className="border-b-[1.5px]">
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              <div className="text-l ml-7 px-4 py-2 font-semibold text-muted-foreground">
                Tags
              </div>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>

            <CommandGroup>
              <div className="text-l ml-7 px-4 py-2 font-semibold text-muted-foreground">
                Authors
              </div>
              {authors.map((author) => (
                <CommandItem
                  key={author.value}
                  value={author.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === author.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {author.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
