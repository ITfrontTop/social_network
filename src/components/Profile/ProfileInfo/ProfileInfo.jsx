import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        {/* <img
          src="https://www.poland.travel/images/ru-RU/Rozne/_MG_5284.jpg"
          alt="content img"
        /> */}
        <div className={s.background}></div>
      </div>
      <div className={s.descriptionBlock}>
        <div className={s.imageUser}>image user</div>
        <div className={s.descriptionUser}>description</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
