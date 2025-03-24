import styles from "./Titulo.module.css";

export const Titulo = ({ children }) => {
  return <div className={styles.titulo}>{children}</div>;
};
