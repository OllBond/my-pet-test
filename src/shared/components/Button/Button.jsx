import css from './button.module.css';

const Button = ({ children, type = 'submit', onChangeFollowers }) => {
  return (
    <button type={type} className={css.btnFollow} onClick={onChangeFollowers}>
      {children}
    </button>
  );
};
export default Button;
