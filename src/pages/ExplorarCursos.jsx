import { useState } from "react";
import { courses } from "../app/data/courses.js";

import { BarraDeBusca } from "../componentes/BarraDeBusca/index.jsx";
import { FiltroDeCategoria } from "../componentes/FiltroDeCategoria/index.jsx";
import { CartaoDoCurso } from "../componentes/CartaoDoCurso/index.jsx";

import styles from "./ExplorarCursos.module.css";

const categories = ["Todos", "Tecnologia", "Design", "Marketing", "Negócios", "Arte"];

export function ExploreCourses() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [query, setQuery] = useState("");

  const filtered = courses.filter((c) => {
    const matchesCategory = activeCategory === "Todos" || c.category === activeCategory;
    const matchesQuery =
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.instructor.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className={styles.pageContainer}>
      
      <header className={styles.header}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Explorar Cursos</h1>
          <p className={styles.subtitle}>Descubra novos conhecimentos</p>
        </div>
        
        <BarraDeBusca
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Buscar cursos..." 
        />
      </header>

      <section className={styles.filtersSection}>
        <FiltroDeCategoria
          categories={categories}
          activeCategory={activeCategory}
          onCategorySelect={setActiveCategory}
        />
      </section>

      <section className={styles.gridContainer}>
        {filtered.map((course) => (
          <CartaoDoCurso key={course.id} course={course} />
        ))}
      </section>

    </div>
  );
}