import clsx from 'clsx';

import type { PageWrapperProps } from '@shared-types/common';

import styles from './PageWrapper.module.scss';

const PageWrapper = ({
  children,
  className,
}: PageWrapperProps): React.JSX.Element => {
  return (
    <main
      className={clsx(
        styles.pageWrapper,
        className,
      )}
    >
      {children}
    </main>
  );
};

export default PageWrapper;