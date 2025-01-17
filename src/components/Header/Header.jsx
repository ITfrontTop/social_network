import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import { IoLogoFacebook } from 'react-icons/io';

const Header = (props) => {
  return (
    <header className={s.header}>
      <IoLogoFacebook size="40px" color="#fff" />
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login}
            <button onClick={props.logout}>Log out</button>
          </div>
        ) : (
          <NavLink to={'/login'}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
