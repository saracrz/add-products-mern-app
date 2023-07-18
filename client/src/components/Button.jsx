import PropTypes from "prop-types";

export const Button = ({ label, className, onClick }) => {
  return (
    <button type="submit" className={className} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};
