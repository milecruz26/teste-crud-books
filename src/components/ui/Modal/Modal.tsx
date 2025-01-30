import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import styles from "./Modal.module.css";
import Button from "../Button/Button";

type ModalProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  trigger: React.ReactNode;
};

export const Modal = ({
  title,
  children,
  isOpen,
  onOpenChange,
  trigger,
}: ModalProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>
        <Button>{trigger}</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Title>{title}</Dialog.Title>
          {children}
          <Dialog.Close className={styles.closeButton} asChild>
            <Cross2Icon />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
