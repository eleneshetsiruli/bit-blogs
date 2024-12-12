import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { MenuIcon } from "./svgs/MenuIcon";
import { NavLinks } from "./NavLinks";
import { ComboboxDemo } from "./Searcher";
import { PrimaryButton } from "./SignInButton";
import { useTranslation } from "react-i18next";
import { DropDownLanguage } from "./DropDownLanguage";
import { DropDownTheme } from "./DropDownTheme";

export const DropDownMenuContainer = () => {
  const { t } = useTranslation();
  return (
    <Menubar className="border-none">
      <MenubarMenu>
        <MenubarTrigger>
          <MenuIcon />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarSeparator />
          <MenubarItem>
            <NavLinks />
          </MenubarItem>

          <MenubarItem className="flex gap-5">
            <ComboboxDemo />
            <PrimaryButton title={t("home-page.SignIn")} variant="default" />
            <DropDownLanguage />
            <DropDownTheme />
          </MenubarItem>
          <MenubarSeparator />
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
