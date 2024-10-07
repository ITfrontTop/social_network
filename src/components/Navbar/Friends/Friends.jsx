import FriendItem from './FriendItem/FriendItem';
import s from './Friends.module.css';
import { LiaUserFriendsSolid } from 'react-icons/lia';

const Friends = (props) => {
  // console.log(props.state);
  // console.log(props.state[0].id);

  return (
    <div>
      <div className={s.title}>
        <LiaUserFriendsSolid size="20px" />
        Friends:
      </div>
      <div className={s.item}>
        {props.state.map((element) => (
          <FriendItem
            id={element.id}
            name={element.name}
            images={element.images}
            key={element.id}
          />
        ))}
      </div>
    </div>
  );
};
export default Friends;
