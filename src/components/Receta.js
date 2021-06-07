// DEPENDENCIAS:
import React, { useContext, useState } from "react";

// CONTEXT:
import { ModalContext } from "../context/ModalContext";

// MODAL:
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 800,
    height: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 2),
  },
  scroll: { maxHeight: "500px", overflowY: "scroll", overflowX: "none" },
}));

const Receta = ({ receta }) => {
  const { informacion, guardarIdReceta, guardarReceta } =
    useContext(ModalContext);

  // Configuracion del modal de material-ui
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const clases = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Muestra y formatea los ingredientes
  const mostrarIngredientes = (informacion) => {
    let ingredientes = [];
    for (let i = 1; i < 16; i++) {
      if (informacion[`strIngredient${i}`]) {
        ingredientes.push(
          <li
           key={informacion[`strIngredient${i}`]}
          >
            {informacion[`strIngredient${i}`]}
            {informacion[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredientes;
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        {/* Nombre de la bebida */}
        <h2 className="titulo-receta center">{receta.strDrink}</h2>

        {/* Imgen de la bebida */}
        <img
          className="card-img-top"
          src={receta.strDrinkThumb}
          alt={receta.strDrink}
        />

        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-primary"
            onClick={() => {
              guardarIdReceta(receta.idDrink);
              handleOpen();
            }}
          >
            Ver receta
          </button>

          <Modal
            open={open}
            onClose={() => {
              guardarIdReceta(null);
              guardarReceta({});
              handleClose();
            }}
          >
            <div style={modalStyle} className={clases.paper}>
              <div>
                <h2>{informacion.strDrink}</h2>
                <div className="img-modal">
                  <img
                    className="img-fluid my-2 img"
                    src={informacion.strDrinkThumb}
                    alt=""
                  />
                  <div className="detalles-ingre">
                    <h3 className="mt-2">Ingredientes</h3>
                    <ul>{mostrarIngredientes(informacion)}</ul>
                  </div>
                </div>

                <div className="detalles">
                  <div className="instrucciones">
                    <h3 className="mt-2">Instrucciones</h3>
                    <p>{informacion.strInstructions}</p>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Receta;
