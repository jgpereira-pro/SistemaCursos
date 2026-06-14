import { Interruptor } from "../Interruptor/index.jsx";
import styles from "./LinhaDeNotificacao.module.css";

export function LinhaDeNotificacao({ icon: Icon, corIcone, titulo, descricao, defaultChecked }) {
  return (
    <div className={styles.linha}>
      <div className={styles.conteudo}>
        <div className={`${styles.icone} ${corIcone}`}>
          <Icon size={20} />
        </div>
        <div>
          <p className={styles.titulo}>{titulo}</p>
          <p className={styles.descricao}>{descricao}</p>
        </div>
      </div>
      <Interruptor defaultChecked={defaultChecked} />
    </div>
  );
}
