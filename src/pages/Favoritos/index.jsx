import { Banner } from "../../components/Banner";
import Titulo from "../../components/Titulo";
import styles from "./Favoritos.module.css";
import Card from "../../components/Card";
import { useFavoritosContext } from "../../contexts/Favoritos";

const Favoritos = () => {
  const { favorito } = useFavoritosContext();
  return (
    <>
      <Banner imagem={"favoritos"} />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo> 
      <section className={styles.container}>
        {favorito.map((fav) => <Card {...fav} key={fav.id} />)}
      </section>
    </>
  );
};

export default Favoritos;
