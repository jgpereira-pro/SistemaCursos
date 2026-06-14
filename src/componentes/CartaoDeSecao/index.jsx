import styles from "./CartaoDeSecao.module.css";

export function CartaoDeSecao({ id, icon: Icon, corIcone, titulo, subtitulo, children }) {
  return (
    <section id={`config-${id}`} className={styles.cartao}>
      <header className={styles.cabecalho}>
        <div className={`${styles.icone} ${corIcone}`}>
          <Icon size={20} />
        </div>
        <div>
          <h2 className={styles.titulo}>{titulo}</h2>
          <p className={styles.subtitulo}>{subtitulo}</p>
        </div>
      </header>
      {children}
    </section>
  );
}
