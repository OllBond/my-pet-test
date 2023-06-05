import Button from 'shared/Button/Button';
import picture from './picture.png';
import logo from './logo.png';
import css from './tweets-item.module.css';

const TweetsItem = ({ user, tweets, followers, avatar }) => {
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
        <p className={css.followers}>{followers} FOLLOWERS</p>
        <Button className={css.btnFollow} type="button">
          FOLLOW
        </Button>
      </div>
    </li>
  );
};

export default TweetsItem;
