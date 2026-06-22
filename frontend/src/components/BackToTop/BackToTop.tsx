import {
  useEffect,
  useState,
} from 'react';

import {
  ChevronUp,
} from 'lucide-react';

import styles from './BackToTop.module.scss';

const SCROLL_THRESHOLD =
  500;

const BackToTop =
  (): React.JSX.Element | null => {
    const [
      isVisible,
      setIsVisible,
    ] = useState(false);

    useEffect(() => {
      const handleScroll =
        (): void => {
          setIsVisible(
            window.scrollY >
              SCROLL_THRESHOLD,
          );
        };

      window.addEventListener(
        'scroll',
        handleScroll,
      );

      handleScroll();

      return () => {
        window.removeEventListener(
          'scroll',
          handleScroll,
        );
      };
    }, []);

    const handleClick =
      (): void => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

    if (!isVisible) {
      return null;
    }

    return (
      <button
        type="button"
        aria-label="Back to top"
        className={
          styles.button
        }
        onClick={handleClick}
      >
        <ChevronUp 
          size={22} 
          aria-hidden="true"
        />
      </button>
    );
  };

export default BackToTop;