import css from './home-page.module.css';

const HomePage = () => {
  return (
    <main>
      <h1 className={css.title}>Follow to your star</h1>
      <div className={css.homePageBlock}></div>
    </main>
  );
};
export default HomePage;
