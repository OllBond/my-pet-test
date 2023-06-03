import { NavLink } from 'react-router-dom';

import css from './tweets.module.css';

const Tweets = () => {
  return (
    <div>
      <NavLink to="/tweets" className={css.link}>
        Tweets
      </NavLink>
    </div>
  );
};

export default Tweets;
