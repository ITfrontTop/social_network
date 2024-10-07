import s from './FriendItem.module.css';

const FriendItem = (props) => {
  return (
    <div className={s.item}>
      <img className={s.image} src={props.images} alt="user pick" />
      <span className={s.name}>{props.name}</span>
    </div>
  );
};

export default FriendItem;
