import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import { TbMessages } from 'react-icons/tb';
import { FaRegNewspaper } from 'react-icons/fa6';
import { BsFileEarmarkMusic } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';
import { AiOutlineProfile } from 'react-icons/ai';
import Friends from './Friends/Friends';

const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink
          to={'/profile'}
          className={({ isActive }) => (isActive ? s.activeLink : '')}
        >
          <AiOutlineProfile size="20px" />
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to={'/dialogs'}
          className={({ isActive }) => (isActive ? s.activeLink : '')}
        >
          <TbMessages size="20px" />
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={'/'}>
          <FaRegNewspaper size="20px" />
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={'/'}>
          <BsFileEarmarkMusic size="20px" />
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={'/'}>
          <IoSettingsOutline size="20px" />
          Settings
        </NavLink>
      </div>
      <Friends state={props.state.friends} />
    </nav>
  );
};

export default Navbar;
