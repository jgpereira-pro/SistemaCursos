import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import styles from "./CampoDeEntrada.module.css"; // Certifique-se de que esta linha está exatamente assim

export function CampoDeEntrada({ type }) {
  const [showPassword, setShowPassword] = useState(false);

  const specs = {
    text: {
      label: "Nome Completo",
      placeholder: "Seu nome",
      icon: User,
      htmlType: "text"
    },
    email: {
      label: "Email",
      placeholder: "seuemail@exemplo.com",
      icon: Mail,
      htmlType: "email"
    },
    password: {
      label: "Senha",
      placeholder: "••••••••",
      icon: Lock,
      htmlType: showPassword ? "text" : "password"
    },
    createPassword: {
      label: "Criar Senha",
      placeholder: "No mínimo 6 caracteres",
      icon: Lock,
      htmlType: showPassword ? "text" : "password"
    }
  };

  const currentSpec = specs[type] || specs.text;
  const Icon = currentSpec.icon;
  const isPasswordKind = type === "password" || type === "createPassword";

  return (
    <div className={styles.inputGroup}>
      <label className={styles.label}>{currentSpec.label}</label>
      <div className={styles.relativeInput}>
        {Icon && <Icon className={styles.inputIcon} />}
        
        <input
          type={currentSpec.htmlType}
          placeholder={currentSpec.placeholder}
          className={`${styles.input} ${isPasswordKind ? styles.inputPassword : ""}`}
        />

        {isPasswordKind && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={styles.passwordToggle}
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        )}
      </div>
    </div>
  );
}