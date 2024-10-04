import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://www.poland.travel/images/ru-RU/Rozne/_MG_5284.jpg"
          alt="content img"
        />
      </div>
      <div className={s.descriptionBlock}>avatar + description</div>
    </div>
  );
};

export default ProfileInfo;
