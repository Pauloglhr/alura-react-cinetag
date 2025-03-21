import { Link } from "react-router-dom";
import styles from "./CabecalhoLink.module.css";


export const CabecalhoLink = ({ url, children }) => {
  return (
    <Link to={url} className={styles.cabecalhoLink}>
      {children}
    </Link>
  );
};
