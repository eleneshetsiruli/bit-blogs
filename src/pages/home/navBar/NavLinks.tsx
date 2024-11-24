import { NavLink, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuthContext } from "@/hooks/useContext";

export const NavLinks = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const { user } = useAuthContext();

  return (
    <div className="flex items-center gap-5 text-muted-foreground">
      <NavLink className={"hover:text-ring"} to={`home`}>
        {t("home-page.Home")}
      </NavLink>
      <NavLink className={"hover:text-ring"} to={"write"}>
        {t("home-page.Write")}
      </NavLink>
      <NavLink className={"hover:text-ring"} to={`/${lang}/about`}>
        {t("home-page.About")}
      </NavLink>
      {user && (
        <NavLink className={"hover:text-ring"} to={`/${lang}/profile`}>
          Profile
        </NavLink>
      )}
    </div>
  );
};
