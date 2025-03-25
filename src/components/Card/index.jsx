import { useFavoritosContext } from "../../contexts/Favoritos";
import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.png";
import iconeDesfavoritar from "./desfavoritar.png";

const Card = ({ id, capa, titulo }) => {
  const { favorito, adicionarFavorito } = useFavoritosContext();
  const ehFavorito = favorito.some((fav) => fav.id === id);
  const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;
  return (
    <div className={styles.container}>
      <img src={capa} alt={titulo} />
      <h2>{titulo}</h2>
      <img
        className={styles.favoritar}
        src={icone}
        alt="Favoritar imagem"
        onClick={() => adicionarFavorito({ id, capa, titulo })}
      />
    </div>
  );
};

export default Card;
