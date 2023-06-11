import { useState } from 'react';

import Button from 'shared/Button/Button';

import { fetchUpdateUserById } from 'redux/users/users-operations';

import css from './tweets-item.module.css';

const TweetsItem = ({ id, user, tweets, followers, avatar }) => {
  const [usersFollowers, setUsersFollowers] = useState(followers);

  // const textBtn = followers ? 'FOLLOWING' : 'FOLLOW';

  const onChangeFollowers = () => {
    setUsersFollowers(prevUsersFollowers => {
      const followersNew = prevUsersFollowers + 1;
      fetchUpdateUserById({ id, followers: followersNew });
      console.log(followersNew);
      return followersNew;
    });
  };

  return (
    <li className={css.listItems}>
      <div className={css.containerCard}>
        <img
          className={css.imageAvatar}
          src={avatar}
          alt="avatar"
          width="130"
        />
        <h3 className={css.title}>{user}</h3>
        <div className={css.userInfo}>
          <p className={css.tweets}>{tweets} TWEETS</p>
          <p className={css.followers}>{usersFollowers} FOLLOWERS</p>
          <Button
            className={css.btnFollow}
            type="button"
            onChangeFollowers={onChangeFollowers}
          >
            FOLLOW
          </Button>
        </div>
      </div>
    </li>
  );
};

export default TweetsItem;
