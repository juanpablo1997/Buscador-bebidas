import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Crear el contex - el context es una funcón
export const CategoriasContext = createContext();

/* 
    Crear el provider - es de dónde van a salir los datos / funciones
    Es una referencia al context
*/
const CategoriasProvider = (props) => {
    // Crear el state del context
    const [categorias, guardarCategorias] = useState([]);

    // Realiza el llamado a la API
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
            const respuesta = await axios.get(url);
            guardarCategorias(respuesta.data.drinks);
        }
        obtenerCategorias();
    }, []);

    return (
        <CategoriasContext.Provider
            // Estos son los valores disponibles para los demás componentes
            value= {{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;