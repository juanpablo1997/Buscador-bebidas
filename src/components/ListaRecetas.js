// DEPENDENCIAS:
import React, { useContext } from "react";

// COMPONENTE:
import Receta from "./Receta";

// CONTEXT:
import { RecetasContext } from "../context/RecetasContext";

const ListaRecetas = () => {
  const { recetas } = useContext(RecetasContext);

  return (
    <div className="row mt-4">
      {recetas.map(receta => (
          <Receta 
            key={receta.idDrink}
            receta={receta}
          />
      ))}
    </div>
  );
};

export default ListaRecetas;
