import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import styles from "./Alert.module.css";

interface AlertProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  title: string;
  message: string;
}

const Alert: React.FC<AlertProps> = ({
  isOpen,
  onOpenChange,
  onConfirm,
  title,
  message,
}) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Title className={styles.title}>{title}</Dialog.Title>
          <Dialog.Description className={styles.message}>
            {message}
          </Dialog.Description>
          <div className={styles.buttons}>
            <button onClick={onConfirm} className={styles.confirmButton}>
              Confirmar
            </button>
            <Dialog.Close asChild>
              <button className={styles.cancelButton}>Cancelar</button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className={styles.closeButton}>
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Alert;
