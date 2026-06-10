import { Menu, Search, Bell, User } from "lucide-react";
import styles from "./Header.module.css";

export function Header({ onOpenMobileMenu }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <button
          onClick={onOpenMobileMenu}
          className={styles.mobileMenuButton}
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className={styles.searchWrapper}>
          <Search className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Buscar..."
            className={styles.searchInput}
          />
        </div>
      </div>

      <div className={styles.headerRight}>
        <button className={styles.iconButton}>
          <Bell className="w-5 h-5" />
          <span className={styles.notificationDot} />
        </button>
        <button className={styles.iconButton}>
          <User className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
