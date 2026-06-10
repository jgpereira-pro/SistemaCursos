import styles from "./Button.module.css";

export function Button({
  children,
  variant = "primary",
  type = "button",
  fullWidth = false,
  disabled = false,
  onClick,
}) {
  const variantClass = {
    primary: styles.primary,
    secondary: styles.secondary,
    danger: styles.danger,
  }[variant];

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${styles.button} ${variantClass} ${fullWidth ? styles.fullWidth : ""} ${disabled ? styles.disabled : ""}`}
    >
      {children}
    </button>
  );
}
