import styles from "./BotaoAlternaForms.module.css";

// 1. Componente que altera entre Login e Cadastro
export function BotaoAlternaForms({ texto, textoBotao, aoClicar }) {
  return (
    <p className={styles.footerText}>
      {texto}{" "}
      <button 
        type="button" 
        onClick={aoClicar} 
        className={`${styles.link} ${styles.linkBold}`}
      >
        {textoBotao}
      </button>
    </p>
  );
}

// 2. Componente de esquecer a senha com o alert removido
export function BotaoEsqueceuSenha() {
  const handleClique = () => {
    // Função vazia apenas para efeito de apresentação (sem alert)
  };

  return (
    <button 
      type="button" 
      onClick={handleClique} 
      className={styles.esqueceuSenha}
    >
      Esqueceu a senha?
    </button>
  );
}