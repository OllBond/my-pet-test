import { NavLink } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';

import Tweets from './Tweets/Tweets';

import css from './navbar.module.css';

const NavBar = () => {
  return (
    <div className={css.navbar}>
      <NavLink to="/" className={css.titleHome}>
        <AiOutlineHome className={css.iconHome} /> Home
      </NavLink>
      <Tweets />
    </div>
  );
};
export default NavBar;
