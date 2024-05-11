import PropTypes from "prop-types";

function WiderLayout({ children }) {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="w-11/12 md:w-full flex-grow flex">{children}</div>
    </div>
  );
}

WiderLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { WiderLayout };
