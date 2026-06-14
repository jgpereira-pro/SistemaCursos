import styles from "./Interruptor.module.css";

export function Interruptor({ defaultChecked }) {
  return (
    <label className={styles.interruptor}>
      <input type="checkbox" defaultChecked={defaultChecked} className={styles.input} />
      <span className={styles.trilho}>
        <span className={styles.bolinha} />
      </span>
    </label>
  );
}
