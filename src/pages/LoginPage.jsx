import { useState } from "react";
import { GraduationCap, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

export function LoginPage({ onLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side: Form */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:flex-none lg:w-1/2 lg:px-20 xl:px-24 bg-card">
        <div className="mx-auto w-full max-w-sm lg:w-96 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-2xl tracking-tight">EduPlatform</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-foreground">Acesse sua conta</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Bem-vindo de volta! Por favor, insira seus dados para continuar.
          </p>

          <form onSubmit={(e) => { e.preventDefault(); onLogin(); }} className="mt-8 space-y-6">
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6 text-sm text-primary">
              <p className="font-medium mb-1">Dica para acesso:</p>
              <p>Use qualquer email e senha para entrar. A autenticação é apenas uma simulação.</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="aluno@eduplatform.com"
                    className="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Senha</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-12 py-2.5 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-border text-primary focus:ring-primary" />
                <span className="text-sm text-muted-foreground">Lembrar-me</span>
              </label>
              <a href="#" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                Esqueceu a senha?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all active:scale-[0.98] shadow-lg shadow-primary/25 flex items-center justify-center gap-2 group"
            >
              Entrar na Plataforma
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-center text-sm text-muted-foreground">
              Não tem uma conta?{" "}
              <a href="#" className="font-semibold text-primary hover:text-primary/80 transition-colors">
                Registre-se
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="hidden lg:block relative w-1/2 bg-muted overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-purple-900/95 mix-blend-multiply z-10" />
        <img
          src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMGxhcHRvcHxlbnwxfHx8fDE3Nzk4ODU4MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Estudantes universitários"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-12 lg:p-20 text-white">
          <div className="max-w-xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 fill-mode-backwards">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Transforme seu futuro através da educação
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Junte-se a milhares de estudantes em nossa plataforma de aprendizado inovadora.
              Aprenda as habilidades do amanhã e avance em sua carreira hoje mesmo.
            </p>
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/20">
              <div className="flex -space-x-3">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" className="w-10 h-10 rounded-full border-2 border-primary/50" alt="" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" className="w-10 h-10 rounded-full border-2 border-primary/50" alt="" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" className="w-10 h-10 rounded-full border-2 border-primary/50" alt="" />
                <div className="w-10 h-10 rounded-full border-2 border-primary/50 bg-white/20 backdrop-blur-sm flex items-center justify-center text-xs font-bold">+2k</div>
              </div>
              <div className="text-sm font-medium text-white/90">
                Mais de 2.000 alunos ativos
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
