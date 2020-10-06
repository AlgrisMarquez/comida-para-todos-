import React, { Fragment } from "react";
import "../../assets/styles/components/ActionLines.scss";
import campaña from "../../assets/static/images/campaña.png";
import bancodealimentos from "../../assets/static/images/bancodealimentos.png";
import escuela from "../../assets/static/images/escuela.png";
import plataformasolidaria from "../../assets/static/images/plataformasolidaria.png";
import TextActionLines from "./TextActionLines";

const ActionLines = () => {
  return (
    <Fragment>
      <TextActionLines />
      <div className="container-img-actionLines">
        <div>
          <img 
          src={campaña} 
          className="img-actionLines" 
          alt={"campaña"} 
          />
          <p className="name-actionLine">Campaña solidaria de emergencia</p>
        </div>
        <div>
          <img
            src={bancodealimentos}
            className="img-actionLines"
            alt={"bancodealimentos"}
          />
          <p className="name-actionLine">Banco de alimentos</p>
        </div>
        <div>
          <img src={escuela} 
          className="img-actionLines" 
          alt={"escuela"} 
          />
          <p className="name-actionLine">Escuela</p>
        </div>
        <div>
          <img
            src={plataformasolidaria}
            className="img-actionLines"
            alt={"plataformasolidaria"}
          />
          <p className="name-actionLine">Plataforma solidaria</p>
        </div>
      </div>
    </Fragment>
  );
};

export default ActionLines;
