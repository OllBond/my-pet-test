import { useSelector } from 'react-redux';
import { getAllUsers } from 'redux/users/users-selectors';

import TweetsItem from 'modules/TweetsItem/TweetsItem';
// import css from "./tweets-list.module.css"

const TweetsList = () => {
  const allUsers = useSelector(getAllUsers);
  console.log(allUsers);

  return (
    <div>
      <ul>
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
