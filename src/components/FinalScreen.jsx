import React, { Fragment, useEffect } from "react";

const FinalScreen = ({ finalScore, timesLaunched, finishGame }) => {
  useEffect(() => {
    const body = document.getElementsByClassName("notOpaque")[0];
    body.className = "opaqueFont";
  }, []);

  return (
    <Fragment>
      <div className="FinalScreenContainer">
        <p>Juego terminado </p>
        <p>¿Acaso te ha consumido la avaricia?</p>
        <p>Puntuación final: {finalScore}</p>
        <p>Haz tirado el dado {timesLaunched} veces</p>
        <span class="buttonFinish" onClick={() => finishGame()}>
          Jugar de nuevo
        </span>
      </div>
    </Fragment>
  );
};

export default FinalScreen;
