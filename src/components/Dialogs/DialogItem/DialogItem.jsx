import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  // console.log(props.image);
  return (
    <div className={s.item}>
      <img className={s.image} src={props.image} alt="mini avatar" />
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? s.activeLink : '')}
      >
        {props.name}
      </NavLink>
    </div>
  );
};
export default DialogItem;
