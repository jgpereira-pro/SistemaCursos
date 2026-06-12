import { BarraDeProgresso } from "../BarraDeProgresso/index.jsx";
import styles from "./CartaoDoCurso.module.css";

export function CartaoDoCurso({ course }) {
  return (
    <div className={styles.courseCard}>
      <img 
        src={course.image || course.thumbnail} 
        alt={`Capa do curso ${course.title}`} 
        className={styles.courseImage}
      />
      
      <div className={styles.courseContent}>
        <div className={styles.courseHeader}>
          <h3 className={styles.courseTitle}>{course.title}</h3>
          <p className={styles.courseInstructor}>{course.instructor}</p>
        </div>

        {/* Aqui estava a duplicação! Agora o Cartão apenas chama a Barra, 
            e a Barra decide como desenhar o texto e os números internamente. */}
        <div className={styles.progressContainer}>
          <BarraDeProgresso progresso={course.progress} />
        </div>

        <div className={styles.courseFooter}>
          <div className={styles.courseMeta}>
            <span>📄 {course.lessons} aulas</span>
            <span>•</span>
            <span>⏱️ {course.duration}</span>
          </div>
          <button className={styles.continueButton}>Continuar</button>
        </div>
      </div>
    </div>
  );
}