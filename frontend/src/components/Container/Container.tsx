import clsx from 'clsx';

import type { ContainerProps } from '@shared-types/common';

import styles from './Container.module.scss';

const Container = ({
  children,
  className,
}: ContainerProps): React.JSX.Element => {
  return (
    <div
      className={clsx(
        styles.container,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;