import { X } from 'lucide-react';

import { NAVIGATION_ITEMS } from '../../config/navigation';

import styles from './MobileMenu.module.scss';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({
  isOpen,
  onClose,
}: MobileMenuProps) => {
  return (
    <div
      className={`${styles.overlay} ${
        isOpen ? styles.open : ''
      }`}
    >
      <div className={styles.drawer}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        <nav className={styles.navigation}>
          {NAVIGATION_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={styles.link}
              onClick={onClose}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;