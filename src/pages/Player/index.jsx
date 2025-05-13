import { useParams } from "react-router-dom";
import { Banner } from "../../components/Banner";
import Titulo from "../../components/Titulo";
import styles from "./Player.module.css";
import NaoEcontrada from "../NaoEcontrada";
import { useEffect, useState } from "react";

const Player = () => {
  const [video, setVideo] = useState();
  const parametros = useParams();
  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/pauloglhr/cinetag-api/videos?${parametros.id}`)
    .then(res => res.json())
    .then(dados => {
      setVideo(...dados)
    })
  }, [])
  
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
