import { Outlet } from "react-router-dom";
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import { FavoritoProvider } from "../../contexts/Favoritos";
import Container from "../../components/Container";
import Rodape from "../../components/Rodape/Rodape";

const PaginaPadrao = () => {
  return (
    <>
      <Cabecalho />
      <Container>
        <FavoritoProvider>
          <Outlet />
        </FavoritoProvider>
      </Container>
      <Rodape />
    </>
  );
};

export default PaginaPadrao;
