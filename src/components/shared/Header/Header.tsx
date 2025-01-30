import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <NavLink
              to="/authors"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Autores
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Livros
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
