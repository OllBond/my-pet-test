import css from '../../shared/Button/button.module.css';

const BtnLoadMore = ({ onLoadMore }) => {
  return (
    <button
      type="button"
      className={css.btnFollow}
      onClick={() => {
        onLoadMore();
      }}
    >
      Load More
    </button>
  );
};
export default BtnLoadMore;
