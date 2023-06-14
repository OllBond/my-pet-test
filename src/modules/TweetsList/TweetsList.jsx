import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import BtnLoadMore from 'modules/BtnLoadMore/BtnLoadMore';
import TweetsItem from 'modules/TweetsItem/TweetsItem';

import { fetchAllUsers } from '../../redux/users/users-operations';
import { getAllUsers } from '../../redux/users/users-selectors';

import css from './tweets-list.module.css';

const TweetsList = () => {
  const allUsers = useSelector(getAllUsers);
  console.log('5', allUsers);
  const [displayedUsers, setDisplayedUsers] = useState([]);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUsers(page));
  }, [dispatch, page]);

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    setDisplayedUsers(allUsers.slice(0, page * 3));
  }, [allUsers, page]);

  return (
    <div className={css.listContainer}>
      <ul className={css.list}>
        {displayedUsers.map(({ id, user, tweets, followers, avatar }) => (
          <TweetsItem
            key={id}
            user={user}
            tweets={tweets}
            followers={followers}
            avatar={avatar}
          />
        ))}
      </ul>
      <BtnLoadMore onLoadMore={onLoadMore} />
    </div>
  );
};

export default TweetsList;

TweetsList.defaultProps = {
  allUsers: [],
};
