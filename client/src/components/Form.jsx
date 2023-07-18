import { Button } from "./Button";
import PropTypes from 'prop-types';

export const Form = ({ placeholder, onSubmit, onChange, value }) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        id="POST-name"
        type="text"
        name="product"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
      <Button label="Add Product" className="submit-button" />
    </form>
  );
};


Form.propTypes = {
    placeholder: PropTypes.string,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.string
};
