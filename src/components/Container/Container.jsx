import PropTypes from 'prop-types';
import s from './Container.module.css';
export default function Container({ title, children }) {
  return (
    <div className={s.form__container}>
      <h2 className={s.form__text}>{title}</h2>
      {children}
    </div>
  );
}

Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
