import { Outlet } from 'react-router-dom';

import styles from './PublicLayout.module.scss';

const PublicLayout = (): React.JSX.Element => {
  return (
    <section className={styles.publicLayout}>
      <Outlet />
    </section>
  );
};

export default PublicLayout;