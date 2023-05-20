import css from './Section.module.css';
import PropTypes from 'prop-types';

export default function Section({ title }) {
  return <p className={css.title}>{title}</p>;
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
