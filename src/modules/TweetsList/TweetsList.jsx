import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import BtnLoadMore from 'modules/BtnLoadMore/BtnLoadMore';
import TweetsItem from 'modules/TweetsItem/TweetsItem';
import Loader from '../../shared/components/Loader/Loader';

import { fetchAllUsers } from '../../redux/users/users-operations';
import { getAllUsers } from '../../redux/users/users-selectors';

import css from './tweets-list.module.css';

const TweetsList = () => {
  const allUsers = useSelector(getAllUsers);

  const [displayedUsers, setDisplayedUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    try {
      setLoading(true);
      dispatch(fetchAllUsers(page));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [dispatch, page, error]);

  const onLoadMore = () => {
    setLoading(true);
    setPage(prevPage => prevPage + 1);
    setLoading(false);
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
      {loading && <Loader />}
      <BtnLoadMore onLoadMore={onLoadMore} />
    </div>
  );
};

export default TweetsList;

TweetsList.defaultProps = {
  allUsers: [],
};
