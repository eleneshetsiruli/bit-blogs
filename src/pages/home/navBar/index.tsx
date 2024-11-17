import { DropDownLanguage } from "./DropDownLanguage";
import { DropDownTheme } from "./DropDownTheme";
import { NavLinks } from "./NavLinks";
import { ComboboxDemo } from "./Searcher";
import { PrimaryButton } from "./SignInButton";
import { Title } from "./Title";
import { useTranslation } from "react-i18next";

export const NavBar = () => {
  const { t } = useTranslation();
  return (
    <div className="flex h-[70px] items-center justify-around border-b-[1.5px] border-b-chart-1">
      <Title title="BitBlogs" />
      <NavLinks />
      <div className="flex items-center gap-10">
        <ComboboxDemo />
        <PrimaryButton title={t("home-page.SignIn")} variant="default" />
        <DropDownLanguage />
        <DropDownTheme />
      </div>
    </div>
  );
};
