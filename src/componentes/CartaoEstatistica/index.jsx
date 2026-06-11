import { BookOpen, CheckCircle, Award } from "lucide-react";
import styles from "./CartaoEstatistica.module.css";

// O componente agora guarda o próprio "conhecimento" de como deve se parecer
const CONFIGURACAO_VISUAL = {
  progresso: {
    label: "Em Progresso",
    icone: BookOpen,
    corBase: "var(--primary-color, #6366f1)",
    fundoIcone: "#eef2ff", // Um tom bem claro da cor primária
  },
  concluidos: {
    label: "Concluídos",
    icone: CheckCircle,
    corBase: "var(--success-color, #22c55e)",
    fundoIcone: "#f0fdf4",
  },
  certificados: {
    label: "Certificados",
    icone: Award,
    corBase: "var(--warning-color, #f59e0b)",
    fundoIcone: "#fffbeb",
  }
};

export function CartaoEstatistica({ variante, valor }) {
  // Busca as configurações com base na variante solicitada, 
  // com um fallback para 'progresso' caso seja digitado errado
  const config = CONFIGURACAO_VISUAL[variante] || CONFIGURACAO_VISUAL.progresso;
  const IconeComponente = config.icone;

  return (
    <div className={styles.statCard}>
      <div 
        className={styles.statIcon} 
        style={{ 
          color: config.corBase, 
          backgroundColor: config.fundoIcone 
        }}
      >
        <IconeComponente size={24} />
      </div>
      <div className={styles.statInfo}>
        <span className={styles.statLabel}>{config.label}</span>
        <span className={styles.statValue}>{valor}</span>
      </div>
    </div>
  );
}