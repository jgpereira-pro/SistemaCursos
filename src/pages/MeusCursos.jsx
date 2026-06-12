// 1. Importamos a lista 'courses' em vez de 'meusCursos'
import { courses } from "../app/data/courses.js"; 
import { CartaoEstatistica } from "../componentes/CartaoEstatistica/index.jsx";
import { CartaoDoCurso } from "../componentes/CartaoDoCurso/index.jsx";
import styles from "./MeusCursos.module.css";

export function MeusCursos() {
  return (
    <div className={styles.pageContainer}>
      
      <header className={styles.header}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Meu Aprendizado</h1>
          <p className={styles.subtitle}>Acompanhe seu progresso</p>
        </div>
      </header>

      <section className={styles.statsContainer}>
        <CartaoEstatistica variante="progresso" valor={4} />
        <CartaoEstatistica variante="concluidos" valor={3} />
        <CartaoEstatistica variante="certificados" valor={3} />
      </section>

      <section className={styles.coursesSection}>
        <h2 className={styles.sectionTitle}>Cursos Inscritos</h2>
        
        <div className={styles.courseList}>
          {/* 2. Alteramos aqui para fazer o map na lista 'courses' */}
          {courses.map((course) => (
            <CartaoDoCurso key={course.id} course={course} />
          ))}
        </div>
      </section>

    </div>
  );
}