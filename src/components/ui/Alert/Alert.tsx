import React from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import styles from "./Alert.module.css";

interface AlertProps {
  type?: "info" | "error" | "success";
  message: string;
}

const Alert: React.FC<AlertProps> = ({ type = "info", message }) => {
  const alertClass = `${styles.alert} ${styles[type]}`;

  return (
    <div className={alertClass} role="alert">
      <InfoCircledIcon className={styles.icon} />
      <VisuallyHidden>{type}: </VisuallyHidden>
      {message}
    </div>
  );
};

export default Alert;
