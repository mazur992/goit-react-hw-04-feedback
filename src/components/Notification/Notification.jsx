import css from './Notification.module.css';
import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return <p className={css.note}>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
