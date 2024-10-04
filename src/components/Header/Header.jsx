import s from './Header.module.css';
import { IoLogoFacebook } from 'react-icons/io';

const Header = () => {
  return (
    <header className={s.header}>
      <IoLogoFacebook size="40px" color="#fff" />
    </header>
  );
};

export default Header;
