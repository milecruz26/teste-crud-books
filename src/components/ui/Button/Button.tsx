import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  primary?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ primary, onClick, children }) => {
  const buttonClass = `${styles.button} ${primary ? styles.primary : ""}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
