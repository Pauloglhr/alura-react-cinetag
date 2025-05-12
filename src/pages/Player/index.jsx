import { useParams } from "react-router-dom";
import { Banner } from "../../components/Banner";
import Titulo from "../../components/Titulo";
import videos from "../../db.json";
import styles from "./Player.module.css";
import NaoEcontrada from "../NaoEcontrada";

const Player = () => {
  const parametros = useParams();
  const video = videos.find((video) => {
    return video.id === Number(parametros.id);
  });

  if(!video){
    return <NaoEcontrada />
  }

  return (
    <>
      <Banner imagem={"player"} />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.section}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
};

export default Player;
