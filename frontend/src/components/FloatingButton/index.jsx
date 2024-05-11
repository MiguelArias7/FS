import { GiHamburgerMenu } from "react-icons/gi";
import PropTypes from "prop-types";

function FloatingButton({ hideMenu, setHideMenu }) {
  return (
    <div className="fixed bottom-4 left-4 flex items-center justify-center p-1 border-2 border-secundary bg-transparent rounded-full z-50">
      <div className="flex items-center justify-center bg-secundary rounded-full p-2">
        <span
          className={`text-xl md:text-2xl  text-primaryAriadna cursor-pointer animate-rotate_minus90 ${hideMenu ? "animate-rotate_plus90" : "animate-rotate_minus90"}`}
          onClick={() => {
            setHideMenu((prevSate) => !prevSate);
          }}
        >
          <GiHamburgerMenu></GiHamburgerMenu>
        </span>
      </div>
    </div>
  );
}

FloatingButton.propTypes = {
  hideMenu: PropTypes.bool,
  setHideMenu: PropTypes.func,
};

export { FloatingButton };
