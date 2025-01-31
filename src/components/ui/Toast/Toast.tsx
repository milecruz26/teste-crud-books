import React, { useEffect } from "react";
import styles from "./Toast.module.css";

interface ToastProps {
  type: "info" | "error" | "success";
  message: string;
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({
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
    <div className={`${styles.toast} ${styles[type]}`}>
      {message}
      <button onClick={onClose} className={styles.closeButton}>
        &times;
      </button>
    </div>
  );
};

export default Toast;
