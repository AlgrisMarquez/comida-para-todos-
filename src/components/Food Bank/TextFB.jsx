import React from "react";
import "../../assets/styles/components/menu/TextFB.scss";
import './ImgCompFB'; 

const TextFB = () => {
  return (
    <div className="-container-textFB">
      <p className="TextFB">
      "Creemos que <strong>los alimentos no deben ser desperdicios,</strong> por ello los que te sobre en casa o no ocupes, <strong>aquí son bienvenidos."</strong>
      </p>
      <div className="container-subTilte">
        <p className="subTitle-FB">Sigue estos 6 pasos, para poder colaborar.</p>
      </div>
    </div>
  );
};

export default TextFB;