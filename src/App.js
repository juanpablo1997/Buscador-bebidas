// DEPENDENCIAS:
import React from "react";

// COMPONENTES:
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListaReceta from "./components/ListaRecetas";

// CONTEXT:
import CategoriasProvider from "./context/CategoriasContext";
import RecetasProvider from "./context/RecetasContext";
import ModalProvider from "./context/ModalContext";

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header />
          <div className="container mt-4">
            <div className="row ">
              <Formulario />
            </div>
            <ListaReceta />
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
