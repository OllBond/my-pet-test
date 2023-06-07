import { useState } from 'react';

import Button from 'shared/Button/Button';
import picture from './picture.png';
import logo from './logo.png';
import css from './tweets-item.module.css';

// const TweetsItem = ({ item }) => {
//   const [usersObject, setUsersObject] = useState(item);
//   console.log(usersObject);

//   const onChangeFollowers = () => {
//     setUsersObject(prevUserObject => {
//       console.log(item);
//       const followersNew = prevUserObject.followers + 1;
//       return { ...prevUserObject, followers: followersNew };
//     });
//   };

//   return (
//     <li className={css.listItems}>
//       <div className={css.containerCard}>
//         <img className={css.logo} scr={logo} alt="logo" width="76" />
//         <img
//           className={css.backGroundImage}
//           src={picture}
//           alt="pictureCheckMarkandQuestion"
//         />
//         <img src={usersObject.avatar} alt="avatar" width="308" />
//         <h3 className={css.title}>{usersObject.user}</h3>
//         <p className={css.tweets}>{usersObject.tweets} TWEETS</p>
//         <p className={css.followers}>{usersObject.followers} FOLLOWERS</p>
//         <Button
//           className={css.btnFollow}
//           type="button"
//           onChangeFollowers={onChangeFollowers}
//         >
//           FOLLOW
//         </Button>
//       </div>
//     </li>
//   );
// };

// export default TweetsItem;

const TweetsItem = ({ user, tweets, followers, avatar }) => {
  const [usersFollowers, setUsersFollowers] = useState(followers);
  console.log(usersFollowers);

  const onChangeFollowers = () => {
    setUsersFollowers(prevUsersFollowers => {
      const followersNew = prevUsersFollowers + 1;
      return followersNew;
    });
  };

  return (
    <li className={css.listItems}>
      <div className={css.containerCard}>
        <img className={css.logo} scr={logo} alt="logo" width="76" />
        <img
          className={css.backGroundImage}
          src={picture}
          alt="pictureCheckMarkandQuestion"
        />
        <img src={avatar} alt="avatar" width="308" />
        <h3 className={css.title}>{user}</h3>
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
    </li>
  );
};

export default TweetsItem;
