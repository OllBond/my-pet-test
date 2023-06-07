import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllUsers } from '../../redux/users/users-operations';
import { getAllUsers } from '../../redux/users/users-selectors';
import TweetsItem from 'modules/TweetsItem/TweetsItem';
import css from './tweets-list.module.css';

const TweetsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const allUsers = useSelector(getAllUsers);
  console.log('5', allUsers);

  return (
    <div className={css.listContainer}>
      {/* <ul className={css.list}>
        {allUsers.map(item => (
          <TweetsItem key={item.id} item={item} />
        ))}
      </ul> */}
      <ul className={css.list}>
        {allUsers.map(({ id, user, tweets, followers, avatar }) => (
          <TweetsItem
            key={id}
            user={user}
            tweets={tweets}
            followers={followers}
            avatar={avatar}
          />
        ))}
      </ul>
    </div>
  );
};

export default TweetsList;

TweetsList.defaultProps = {
  allUsers: [],
};
