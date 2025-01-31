import React from "react";
import { Author } from "../../../models/Author";
import { PersonIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import styles from "./AuthorDetails.module.css";

interface AuthorDetailsProps {
  author: Author;
}

const AuthorDetails: React.FC<AuthorDetailsProps> = ({ author }) => {
  return (
    <div className={styles.detailsContainer}>
      <p>
        <PersonIcon className={styles.icon} /> <strong>Nome:</strong>{" "}
        {author.name}
      </p>
      <p>
        <EnvelopeClosedIcon className={styles.icon} /> <strong>Email:</strong>{" "}
        {author.email || "N/A"}
      </p>
    </div>
  );
};

export default AuthorDetails;
