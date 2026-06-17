import { Outlet } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

import styles from './AppLayout.module.scss';

const AppLayout = () => {
  return (
    <div className={styles.layout}>
      <Navbar />

      <div className={styles.content}>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default AppLayout;