import styles from "./Card.module.css";
import iconeFavorito from "./favoritar.png";

export const Card = ({ id, capa, titulo }) => {
  return (
    <div className={styles.container}>
      <img src={capa} alt={titulo} />
      <h2>{titulo}</h2>
      <img className={styles.favoritar} src={iconeFavorito} alt="Favoritar imagem" />
    </div>
  );
};
