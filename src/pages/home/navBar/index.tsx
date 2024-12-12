import { DropDownLanguage } from "./DropDownLanguage";
import { DropDownTheme } from "./DropDownTheme";
import { NavLinks } from "./NavLinks";
import { ComboboxDemo } from "./Searcher";
import { PrimaryButton } from "./SignInButton";
import { Title } from "./Title";
import { useTranslation } from "react-i18next";

import { DropDownMenuContainer } from "./DropDownMenuContainer";

export const NavBar = () => {
  const { t } = useTranslation();

  return (
    <div className="flex h-[70px] items-center justify-around border-b-[1.5px] border-b-chart-1">
      <Title title="BitBlogs" />
      <div className="hidden lg:flex">
        <NavLinks />
      </div>
      <div className="lg:hidden">
        <DropDownMenuContainer />
      </div>
      <div className="hidden items-center gap-10 lg:flex">
        <ComboboxDemo />
        <PrimaryButton title={t("home-page.SignIn")} variant="default" />
        <DropDownLanguage />
        <DropDownTheme />
      </div>
    </div>
  );
};
