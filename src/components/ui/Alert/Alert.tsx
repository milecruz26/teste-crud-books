import React, { useEffect } from "react";
import styles from "./Alert.module.css";

interface AlertProps {
  type: "info" | "error" | "success";
  message: string;
  onClose: () => void;
  duration?: number;
}

const Alert: React.FC<AlertProps> = ({
  type,
  message,
  onClose,
  duration = 3000,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className={`${styles.alert} ${styles[type]}`}>
      {message}
      <button onClick={onClose} className={styles.closeButton}>
        &times;
      </button>
    </div>
  );
};

export default Alert;
