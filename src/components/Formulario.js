// DEPENDENCIAS:
import React, { useContext, useState } from "react";

// COMPONENTES:

// CONTEXT:
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

/*  
    FUNCIÓN DEL COMPONENTE:

    Este componente tiene como función principal
    poder agregar dos opciones:
        -El ingrediente que el usuario desea buscar.
        -Una categoría. (A través de un select).
*/
const Formulario = () => {
  
  // State local:
  const [ busqueda, guardarBusqueda] = useState({
      nombre: "",
      categoria: ""
  })

  // Obten el state de la rama del contex
  const { categorias } = useContext(CategoriasContext);
  const { guardarBusquedareceta, guardarConsultar } = useContext(RecetasContext);

  // Función para leer el contenido del input
  const obtenerDatosReceta = e => {
    guardarBusqueda({
        ...busqueda,
        [e.target.name] : e.target.value
    });
  }

  return (
    <form 
        className="col-12"
        onSubmit={e => {
            e.preventDefault();
            guardarBusquedareceta(busqueda);
            guardarConsultar(true);
        }}    
    >
      {/* Subtítulo */}
      <fieldset className="text-center">
        <legend>Buscar bebidas por Categoría o Ingrediente</legend>
      </fieldset>

      {/* form */}
      <div className="row mt-2">
        {/* input - text */}
        <div className="col-md-4">
          <input
            name="nombre"
            className="form-control"
            type="text"
            placeholder="Buscar por Ingrediente"
            onChange={obtenerDatosReceta}
          />
        </div>

        {/* select */}
        <div className="col-md-4">
          <select 
            className="form-control" 
            name="categoria"
            onChange={obtenerDatosReceta}
          >
            <option value="">Selecciona Categoría</option>
            {categorias.map((categoria) => (
              <option key={categoria.strCategory} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>

        {/* input - submit*/}
        <div className="col-md-4">
          <input
            className="btn btn-block btn-primary"
            type="submit"
            value="Buscar Bebidas"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
