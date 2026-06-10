import { Search } from "lucide-react";
import styles from "./BarraDeBusca.module.css";

export function BarraDeBusca ({ value, onChange, placeholder }) {
  return (
    <div className={styles.wrapper}>
      <Search className={styles.icon} />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
}