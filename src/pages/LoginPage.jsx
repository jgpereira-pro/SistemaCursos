import { useState } from "react";
import { GraduationCap, ArrowRight } from "lucide-react";
import { CampoDeEntrada } from "../componentes/CampoDeEntrada"; 
import { BotaoAlternaForms, BotaoEsqueceuSenha } from "../componentes/BotaoAlternaForms"; 
import styles from "./LoginPage.module.css"; 

export function LoginPage({ onLogin }) {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className={styles.container}>
      {/* Left Side: Form */}
      <div className={styles.leftSide}>
        <div className={styles.formWrapper}>
          
          {/* Logo */}
          <div className={styles.logoWrapper}>
            <div className={styles.logoIcon}>
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className={styles.logoText}>EduPlatform</span>
          </div>

          {/* Renderização Condicional: FORMULÁRIO DE LOGIN */}
          {!isRegistering ? (
            <>
              <h2 className={styles.title}>Acesse sua conta</h2>
              <p className={styles.subtitle}>
                Bem-vindo de volta! Por favor, insira seus dados para continuar.
              </p>

              <form onSubmit={(e) => { e.preventDefault(); onLogin(); }} className={`${styles.form} ${styles.spaceY6}`}>
                <div className={styles.spaceY4}>
                  <CampoDeEntrada type="email" />
                  <CampoDeEntrada type="password" />
                </div>

                <div className={styles.formOptions}>
                  <label className={styles.checkboxLabel}>
                    <input type="checkbox" className={styles.checkbox} />
                    <span className={styles.subtitle}>Lembrar-me</span>
                  </label>
                  
                  {/* Botão de recuperar senha componentizado */}
                  <BotaoEsqueceuSenha />
                </div>

                <button type="submit" className={styles.submitButton}>
                  Entrar na Plataforma
                  <ArrowRight className="w-5 h-5" />
                </button>

                {/* Botão para alternar para o formulário de cadastro */}
                <BotaoAlternaForms 
                  texto="Não tem uma conta?" 
                  textoBotao="Registre-se" 
                  aoClicar={() => setIsRegistering(true)} 
                />
              </form>
            </>
          ) : (
            /* Renderização Condicional: FORMULÁRIO DE CADASTRO */
            <>
              <h2 className={styles.title}>Crie sua conta</h2>
              <p className={styles.subtitle}>
                Comece sua jornada educacional hoje mesmo de forma gratuita.
              </p>

              <form onSubmit={(e) => { e.preventDefault(); setIsRegistering(false); }} className={`${styles.form} ${styles.spaceY6}`}>
                <div className={styles.spaceY4}>
                  <CampoDeEntrada type="text" />
                  <CampoDeEntrada type="email" />
                  <CampoDeEntrada type="createPassword" />
                </div>

                <button type="submit" className={styles.submitButton}>
                  Cadastrar Conta
                  <ArrowRight className="w-5 h-5" />
                </button>

                {/* Botão para alternar de volta para o login */}
                <BotaoAlternaForms 
                  texto="Já tem uma conta?" 
                  textoBotao="Acesse sua conta" 
                  aoClicar={() => setIsRegistering(false)} 
                />
              </form>
            </>
          )}

        </div>
      </div>

      {/* Right Side: Image */}
      <div className={styles.rightSide}>
        <div className={styles.overlay} />
        <img
          src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMGxhcHRvcHxlbnwxfHx8fDE3Nzk4ODU4MzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Estudantes universitários"
          className={styles.bgImage}
        />
        <div className={styles.rightContent}>
          <div className={styles.textBlock}>
            <h2 className={styles.rightTitle}>
              Transforme seu futuro através da educação
            </h2>
            <p className={styles.rightSubtitle}>
              Junte-se a milhares de estudantes em nossa plataforma de aprendizado inovadora.
              Aprenda as habilidades do amanhã e avance em sua carreira hoje mesmo.
            </p>
            {/* O bloco comentado antigo foi limpo corretamente para evitar erros de sintaxe */}
          </div>
        </div>
      </div>
    </div>
  );
}