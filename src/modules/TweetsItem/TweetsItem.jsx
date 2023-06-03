import Button from 'shared/Button/Button';

// import css from "./tweets-item.module.css"

const TweetsItem = ({ user, tweets, followers, avatar }) => {
  return (
    <li>
      <div>
        <img src={avatar} alt="avatar" width="308" />
        <h3>{user}</h3>
        <p>{tweets}</p>
        <p>{followers}</p>
        <Button />
      </div>
    </li>
  );
};

export default TweetsItem;
