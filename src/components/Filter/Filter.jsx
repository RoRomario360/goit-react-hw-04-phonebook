import PropTypes from 'prop-types';
import s from './Filter.module.css';

export default function Filter({ handlerFilterUsers }) {
  return (
    <label className={s.form__label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="name"
        required
        onChange={handlerFilterUsers}
      />
    </label>
  );
}

Filter.propTypes = {
  handlerFilterUsers: PropTypes.func.isRequired,
};
