import { Bell, User } from "lucide-react";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
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
