import { BookOpen, GraduationCap, Settings, Menu, X, LogOut } from "lucide-react";
import styles from "./Sidebar.module.css";

const navigation = [
  { name: "Meus Cursos", icon: BookOpen, page: "my-learning" },
  { name: "Explorar Cursos", icon: GraduationCap, page: "courses" },
  { name: "Configurações", icon: Settings, page: "settings" },
];

export function Sidebar({
  currentPage,
  sidebarOpen,
  mobileMenuOpen,
  onNavigate,
  onToggleSidebar,
  onCloseMobileMenu,
  onLogout,
}) {
  return (
    <aside
      className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : styles.sidebarClosed} ${mobileMenuOpen ? styles.mobileVisible : styles.mobileHidden}`}
    >
      <div className={styles.sidebarInner}>
        {/* Logo */}
        <div className={styles.logoArea}>
          {sidebarOpen && (
            <div className={styles.logoWrapper}>
              <div className={styles.logoIcon}>
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className={styles.logoText}>EduPlatform</span>
            </div>
          )}
          <button onClick={onToggleSidebar} className={`${styles.iconButton} ${styles.desktopOnly}`}>
            <Menu className="w-5 h-5" />
          </button>
          <button onClick={onCloseMobileMenu} className={`${styles.iconButton} ${styles.mobileOnly}`}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className={styles.nav}>
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => onNavigate(item.page)}
              className={`${styles.navItem} ${currentPage === item.page ? styles.navItemActive : styles.navItemInactive}`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {sidebarOpen && <span className={styles.navLabel}>{item.name}</span>}
            </button>
          ))}
        </nav>

        {/* User Profile */}
        <div className={styles.userArea}>
          <div className={`${styles.userWrapper} ${!sidebarOpen ? styles.userCentered : ""}`}>
            <div className={styles.userAvatar}>JD</div>
            {sidebarOpen && (
              <div className={styles.userInfo}>
                <div className={styles.userTextWrapper}>
                  <p className={styles.userName}>João da Silva</p>
                  <p className={styles.userRole}>Estudante</p>
                </div>
                <button onClick={onLogout} className={styles.logoutButton} title="Sair">
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
