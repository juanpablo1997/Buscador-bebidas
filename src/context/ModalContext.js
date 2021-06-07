import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [idreceta, guardarIdReceta] = useState(null);
  const [informacion, guardarReceta] = useState({});

  useEffect(() => {
     const obtenerRecetaBebida = async () => {
        if (!idreceta) {
            return;
        }
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
        const respuesta = await axios.get(url);
        guardarReceta(respuesta.data.drinks[0]);
     }
     obtenerRecetaBebida();
  }, [idreceta])

  return (
    <ModalContext.Provider
      value={{
        informacion,
        guardarIdReceta,
        guardarReceta
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
