import { FileText, Clock, Users } from "lucide-react";
import { BarraDeProgresso } from "../BarraDeProgresso";
import { Button } from "../button"; 
import styles from "./CartaoDoCurso.module.css";

export function CartaoDoCurso ({ course }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={course.thumbnail}
          alt={course.title}
          className={styles.thumbnail}
        />
        <div className={styles.badge}>
          {course.category}
        </div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{course.title}</h3>
        <p className={styles.instructor}>{course.instructor}</p>

        <div className={styles.statsContainer}>
          <span className={styles.statItem}>
            <FileText className={styles.icon} />
            {course.lessons} aulas
          </span>
          <span className={styles.statItem}>
            <Clock className={styles.icon} />
            {course.duration}
          </span>
          <span className={styles.statItem}>
            <Users className={styles.icon} />
            {course.students.toLocaleString()}
          </span>
        </div>

        <div className={styles.footer}>
          {course.progress > 0 ? (
            <BarraDeProgresso progress={course.progress} />
          ) : (
            <Button className={styles.startButton}>
              Começar Curso
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}