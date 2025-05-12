import styles from './NaoEncontrada.module.css'

const NaoEcontrada = () => {
  return (
    <>
      <section className={styles.section}>
        <h2>Ops!</h2>
        <p>O conteúdo que você procura não esta disponível.</p>
      </section>
    </>
  );
};

export default NaoEcontrada;
