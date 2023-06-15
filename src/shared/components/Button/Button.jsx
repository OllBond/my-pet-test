import css from './button.module.css';

const Button = ({ text, active, type = 'submit', onChangeFollowers }) => {
  const following = active ? `${css.btnFollow} ${css.active}` : css.btnFollow;
  return (
    <button type={type} className={following} onClick={onChangeFollowers}>
      {text}
    </button>
  );
};
export default Button;
