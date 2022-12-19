import PropTypes from 'prop-types';
import css from './Filter.module.css';


export const Filter = ({ onChange, value }) => {
  return (
    <h2 className={css.filterTitle} htmlFor="filter">
      Find contacs by name
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </h2>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};