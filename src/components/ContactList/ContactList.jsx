import PropTypes from 'prop-types';
import s from './ContactList.module.css';

export default function ContactList({ contactList, onDelete }) {
  return (
    <ul>
      {contactList.map(({ id, name, number }) => {
        return (
          <li className={s.contact__item} key={id}>
            <p className={s.contact__text}>
              Name: <span className={s.contact__num}>{name}</span>
            </p>
            <p className={s.contact__text}>
              Phone: <span className={s.contact__num}>{number}</span>
            </p>

            <button
              className={s.contact__btn}
              type="button"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
