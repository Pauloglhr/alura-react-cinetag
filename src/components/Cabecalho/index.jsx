import { Link } from "react-router-dom";
import styles from "../Cabecalho/Cabecalho.module.css";
import logo from "../Cabecalho/logo.png";
import { CabecalhoLink } from "../CabecalhoLink";

export const Cabecalho = () => {
  return (
    <header className={styles.cabecalho}>
      <Link to={"/"}>
        <img src={logo} alt="Logo da cinetag" />
      </Link>
      <nav>
        <CabecalhoLink url={"/"}>Home</CabecalhoLink>
        <CabecalhoLink url={"/favoritos"}>Favoritos</CabecalhoLink>
      </nav>
    </header>
  );
};
