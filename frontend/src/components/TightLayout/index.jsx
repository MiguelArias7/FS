import PropTypes from "prop-types";

function TightLayout({ children }) {
  return (
    <div className="flex flex-col items-center min-h-screen overflow-hidden md:overflow-visible">
      <div className="w-11/12 md:w-8/12 flex-grow flex flex-col">
        {children}
      </div>
    </div>
  );
}

TightLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TightLayout };
