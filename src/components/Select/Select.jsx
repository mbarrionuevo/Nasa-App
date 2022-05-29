import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Select = ({ onChange, defaultValue, options }) => {
  const [value, setValue] = useState(defaultValue);

  const handleOnChange = (e) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <select name="select" value={value} onChange={handleOnChange}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Select.defaultProps = {
  defaultValue: '',
};

export default Select;
