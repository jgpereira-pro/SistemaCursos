import styles from "./BarraDeProgresso.module.css";

export function BarraDeProgresso({ progresso }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.label}>Progresso</span>
        <span className={styles.value}>{progresso}%</span>
      </div>
      <div className={styles.track}>
        <div
          className={styles.fill}
          style={{ width: `${progresso}%` }}
        />
      </div>
    </div>
  );
}