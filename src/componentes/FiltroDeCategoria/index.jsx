import styles from "./FiltroDeCategoria.module.css";

export function FiltroDeCategoria ({ categories, activeCategory, onCategorySelect }) {
  return (
    <div className={styles.container}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategorySelect(cat)}
          className={`${styles.button} ${
            activeCategory === cat ? styles.active : styles.inactive
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}