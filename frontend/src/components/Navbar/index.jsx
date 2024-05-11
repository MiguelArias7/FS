import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Logo from "/ariadna_logo.png";
import React from "react";
import { FloatingButton } from "../FloatingButton";
import { LanguageSelector } from "../LanguajeSelector";
import { useTranslation } from "react-i18next";

function Navbar({ rutas }) {
  const { t } = useTranslation();
  const Routes = t("Routes");

  const [hideMenu, setHideMenu] = React.useState(true);
  const [changeLanguage, setChangeLanguage] = React.useState(true);

  return (
    <>
      <nav className={`fixed top-0 w-[360px] ${hideMenu ? `-left-full bg-transparent` : "left-[0] bg-primaryAriadna"} z-40 duration-500 h-screen border-r-2`}>
        <div className="flex flex-col flex-grow h-full">
          <div className="items-center justify-center m-4 flex">
            {/* Logo */}
            <img src={Logo} alt="Ariadna Logos" className="w-[150px] h-[150px]"></img>
          </div>

          {/* Opciones de navegación */}
          <ul className={`flex items-center justify-center flex-col text-secundary flex-grow`}>
            {rutas.map((route) => (
              <li
                key={route.path}
                className="my-6 text-center"
                onClick={() => {
                  setHideMenu((prevSate) => !prevSate);
                }}
              >
                <NavLink rel="canonical" to={route.path} className={({ isActive }) => (isActive ? "underline-offset-2 underline decoration-gold" : "")}>
                  <p className="font-thin text-xl">{Routes.find((element) => element.path === route.path).name}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <FloatingButton hideMenu={hideMenu} setHideMenu={setHideMenu}></FloatingButton>
      <LanguageSelector changeLanguage={changeLanguage} setChangeLanguage={setChangeLanguage}></LanguageSelector>
    </>
  );
}

Navbar.propTypes = {
  rutas: PropTypes.array,
};

export { Navbar };
