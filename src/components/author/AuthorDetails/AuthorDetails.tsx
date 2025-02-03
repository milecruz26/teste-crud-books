import React from "react";
import { Author } from "../../../models/Author";
import { PersonIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { Modal } from "../../ui/Modal/Modal";
import styles from "./AuthorDetails.module.css";

interface AuthorDetailsProps {
  author: Author;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const AuthorDetails: React.FC<AuthorDetailsProps> = ({
  author,
  isOpen,
  onOpenChange,
}) => {
  return (
    <Modal
      title="Detalhes do Autor"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <div className={styles.detailsContainer}>
        <p>
          <PersonIcon className={styles.icon} /> <strong>Nome:</strong>
          {author.name}
        </p>
        <p>
          <EnvelopeClosedIcon className={styles.icon} />{" "}
          <strong>E-mail:</strong>
          {author.email || "Sem e-mail"}
        </p>
      </div>
    </Modal>
  );
};

export default AuthorDetails;
