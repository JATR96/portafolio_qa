import styles
  from './PageLoader.module.scss';

const PageLoader =
  (): React.JSX.Element => {
    return (
      <div
        className={
          styles.loader
        }
      >
        <div
          className={
            styles.spinner
          }
        />

        <p>
          Cargando ...
        </p>
      </div>
    );
  };

export default PageLoader;