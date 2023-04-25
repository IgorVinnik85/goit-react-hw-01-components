import PropTypes from 'prop-types';
import css from './Friends.module.css';

export const Friends = ({ friends }) => {
  return (
    <ul className={css.friend__list}>
      {friends.map(({ avatar, id, isOnline, name }) => (
        <li className="item" key={id}>
          <span className={`${css.status} ${css[isOnline]}`}></span>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
