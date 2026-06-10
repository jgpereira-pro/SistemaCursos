import { GraduationCap } from "lucide-react";
import styles from "./Footer.module.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.brand}>
          <div className={styles.brandIcon}>
            <GraduationCap className="w-4 h-4 text-white" />
          </div>
          <span className={styles.brandName}>EduPlatform</span>
        </div>

        <p className={styles.copyright}>
          © {currentYear} EduPlatform. Todos os direitos reservados.
        </p>

        <nav className={styles.links}>
          <a href="#" className={styles.link}>Privacidade</a>
          <a href="#" className={styles.link}>Termos</a>
          <a href="#" className={styles.link}>Suporte</a>
        </nav>
      </div>
    </footer>
  );
}
