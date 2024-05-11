import PropTypes from "prop-types";

function WideLayout({ children }) {
  return <div> {children} </div>;
}

WideLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { WideLayout };
