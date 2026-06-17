import { Outlet } from 'react-router-dom';

import styles from './AppLayout.module.scss';

const AppLayout = (): React.JSX.Element => {
  return (
    <div className={styles.layout}>
      <Outlet />
    </div>
  );
};

export default AppLayout;