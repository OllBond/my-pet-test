import { useState } from 'react';

import Button from 'shared/components/Button/Button';
// import { fetchUpdateUserById } from 'redux/users/users-operations';

import css from './tweets-item.module.css';

const TweetsItem = ({ user, tweets, followers, avatar }) => {
  const [usersFollowers, setUsersFollowers] = useState(followers);
  const [isFollowing, setIsFollowing] = useState(false);
  // const textBtn = followers ? 'FOLLOWING' : 'FOLLOW';

  const onChangeFollowers = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setUsersFollowers(prevUsersFollowers => prevUsersFollowers - 1);
    } else {
      setIsFollowing(true);
      setUsersFollowers(prevUsersFollowers => prevUsersFollowers + 1);
    }
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

        <div className={css.userInfo}>
          <p className={css.title}>{user}</p>
          <p className={css.tweets}>{tweets} TWEETS</p>
          <p className={css.followers}>{usersFollowers} FOLLOWERS</p>
          <Button
            active={isFollowing}
            text={isFollowing ? 'FOLLOWING' : 'FOLLOW'}
            className={css.btnFollow}
            type="button"
            onChangeFollowers={onChangeFollowers}
          ></Button>
        </div>
      </div>
    </li>
  );
};

export default TweetsItem;
