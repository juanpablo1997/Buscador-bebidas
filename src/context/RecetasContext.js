// DEPENDENCIAS:
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  const [recetas, guardarReceta] = useState([]);

  const [busquedareceta, guardarBusquedareceta] = useState({
    nombre: "",
    categoria: "",
  });

  const [consultar, guardarConsultar] = useState(false);

  const { nombre, categoria } = busquedareceta;

  useEffect(() => {
    if (consultar) {
      const obtenerReceta = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
        const respuesta = await axios.get(url);
        guardarReceta(respuesta.data.drinks);
      };
      obtenerReceta();
    } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [busquedareceta]);

  return (
    <RecetasContext.Provider
      value={{
        recetas,
        guardarBusquedareceta,
        guardarConsultar
      }}
    >
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;

/*
ESTRUCTURA BÁSICA DE UN CONTEXT

export const RecetasContext = createContext();

const RecetasContext = () => {
    return (
      <RecetasContext.Provider>
          {props.children}
      </RecetasContext.Provider>
    );
};

export default RecetasContext;

*/
