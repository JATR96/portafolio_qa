import styles from './SkipLink.module.scss';

const SkipLink =
  (): React.JSX.Element => {
    return (
      <a
        href="#main-content"
        className={
          styles.skipLink
        }
      >
        Skip to content
      </a>
    );
  };

export default SkipLink;