import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Cabecalho from "../src/components/Cabecalho/Cabecalho";
import Rodape from "../src/components/Rodape/Rodape";
import Favoritos from "./pages/Favoritos";
import Container from "./components/Container";
import { FavoritoProvider } from "./contexts/Favoritos";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <FavoritoProvider>
          <Routes>
            <Route path={"/"} element={<Inicio />} />
            <Route path={"/favoritos"} element={<Favoritos />} />
          </Routes>
        </FavoritoProvider>
      </Container>
      <Rodape />
    </BrowserRouter>
  );
};

export default AppRoutes;
