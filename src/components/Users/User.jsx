import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

const User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div className={styles.wrapper}>
      <div key={user.id} className={styles.item}>
        <span className={styles.userAvatarFollowed}>
          <div>
            <NavLink to={`/profile/${user.userId}`}>
              <img
                src={/*u.photos.small != null ? u.photos.small : */ userPhoto}
                className={styles.userPhoto}
              />
            </NavLink>
          </div>
          <div>
            {u.followed ? (
              <button
                disabled={followingInProgress.some((id) => id === user.id)}
                className={styles.button}
                onClick={() => {
                  unfollow(user.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={followingInProgress.some((id) => id === user.id)}
                className={styles.button}
                onClick={() => {
                  follow(user.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
        </span>
        <span>
          <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </span>
          <span>
            <div>{user.location.country}</div>
            <div>{user.location.city}</div>
          </span>
        </span>
      </div>
    </div>
  );
};

export default User;
