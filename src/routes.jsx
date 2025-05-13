import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Favoritos from "./pages/Favoritos";
import Player from "./pages/Player";
import NaoEcontrada from "./pages/NaoEcontrada";
import PaginaPadrao from "./pages/PaginaPadrao";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path={"favoritos"} element={<Favoritos />} />
          <Route path={":id"} element={<Player />} />
          <Route path={"*"} element={<NaoEcontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
