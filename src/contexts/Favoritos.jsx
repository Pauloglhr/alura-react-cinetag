import { createContext, useContext, useState } from "react";

const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export const FavoritoProvider = ({ children }) => {
  const [favorito, setFavorito] = useState([]);
  return (
    <FavoritosContext.Provider value={{ favorito, setFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export const useFavoritosContext = () => {
  const { favorito, setFavorito } = useContext(FavoritosContext);

  const adicionarFavorito = (novoFavorito) => {
    const favoritoRepetido = favorito.some(
      (item) => item.id === novoFavorito.id
    );
    const novaLista = [...favorito];

    if (!favoritoRepetido) {
      novaLista.push(novoFavorito);
      return setFavorito(novaLista);
    }

    return setFavorito(novaLista.filter((fav) => fav.id !== novoFavorito.id));
  };

  return {
    favorito,
    adicionarFavorito,
  };
};
