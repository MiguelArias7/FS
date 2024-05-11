import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { HiOutlineLanguage } from "react-icons/hi2";

function LanguageSelector({ changeLanguage, setChangeLanguage }) {
  const { i18n } = useTranslation();
  return (
    <div className="fixed bottom-4 right-4 flex items-center justify-center p-1 border-2 border-secundary bg-transparent rounded-full z-50">
      <div className="flex items-center justify-center bg-secundary rounded-full p-2">
        <span
          className={`text-xl md:text-2xl  text-primaryAriadna cursor-pointer animate-rotate_minus90 ${changeLanguage ? "animate-rotate_plus90" : "animate-rotate_minus90"}`}
          onClick={() => {
            setChangeLanguage((prevSate) => !prevSate);
            if (changeLanguage) i18n.changeLanguage("es");
            if (!changeLanguage) i18n.changeLanguage("en");
          }}
        >
          <HiOutlineLanguage></HiOutlineLanguage>
        </span>
      </div>
    </div>
  );
}

LanguageSelector.propTypes = {
  changeLanguage: PropTypes.bool,
  setChangeLanguage: PropTypes.func,
};

export { LanguageSelector };
