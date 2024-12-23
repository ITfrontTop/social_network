import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        {/* <img
          src="https://www.poland.travel/images/ru-RU/Rozne/_MG_5284.jpg"
          alt="content img"
        /> */}
        {/* <div className={s.background}></div> */}
      </div>
      <div className={s.descriptionBlock}>
        <div className={s.imageUser}>
          <img src={`usersImages/${props.profile[0].photos.large}`} />
        </div>
        {/* также нужно добавить все данные с json */}
        <div className={s.descriptionUser}>
          <ProfileStatus status={'Hello my friends'} />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
