import * as Dialog from "@radix-ui/react-dialog";

type ModalProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

export const Modal = ({
  title,
  children,
  isOpen,
  onOpenChange,
}: ModalProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="overlay" />
        <Dialog.Content className="modal">
          <Dialog.Title>{title}</Dialog.Title>
          {children}
          <Dialog.Close asChild>
            <button>Fechar</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
