import { BookOpen, CheckCircle, Award, FileText, Clock } from "lucide-react";
import { courses } from "../app/data/courses.js";

export function MyLearning() {
  const enrolled = courses.filter((c) => c.progress > 0);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Meu Aprendizado</h1>
        <p className="text-muted-foreground">Acompanhe seu progresso</p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-6">
        <div className="bg-card rounded-xl p-6 border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-500/10 p-3 rounded-lg">
              <BookOpen className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Em Progresso</p>
              <p className="text-2xl font-bold">4</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl p-6 border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-500/10 p-3 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Concluídos</p>
              <p className="text-2xl font-bold">3</p>
            </div>
          </div>
        </div>
        <div className="bg-card rounded-xl p-6 border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-orange-500/10 p-3 rounded-lg">
              <Award className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Certificados</p>
              <p className="text-2xl font-bold">3</p>
            </div>
          </div>
        </div>
      </div>

      {/* Course List */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Cursos Inscritos</h2>
        {enrolled.map((course) => (
          <div key={course.id} className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col lg:flex-row gap-6">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full lg:w-64 h-40 object-cover rounded-lg"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{course.title}</h3>
                    <p className="text-muted-foreground">{course.instructor}</p>
                  </div>
                  {course.progress === 100 && (
                    <div className="flex items-center gap-2 bg-green-500/10 text-green-600 px-3 py-1.5 rounded-lg">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">Concluído</span>
                    </div>
                  )}
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progresso do Curso</span>
                    <span className="font-semibold">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div
                      className={`h-full rounded-full ${course.progress === 100 ? "bg-green-500" : "bg-primary"}`}
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                    <span className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      {course.lessons} aulas
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </span>
                  </div>
                </div>
                <button className="mt-4 bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Continuar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
