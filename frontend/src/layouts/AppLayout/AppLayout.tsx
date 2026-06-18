import { Outlet } from 'react-router-dom';

import Navbar from '@components/Navbar/Navbar';

import styles from './AppLayout.module.scss';

const AppLayout = () => {
  return (
    <div className={styles.layout}>
      <Navbar />

      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;