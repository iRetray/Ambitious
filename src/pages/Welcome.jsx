import React, { Fragment } from "react";

const Welcome = ({ history }) => {
  const goToGame = () => {
    history.push({
      pathname: "/game",
    });
  };

  return (
    <Fragment>
      <div className="WelcomeMainContainer">
        <div className="textContainer">
          <span className="titleGame">AMBITIOUS</span>
          <br />
          <p className="instructions">
            <span>
              Consigue <strong>puntos</strong> lanzando el dado{" "}
            </span>
            <br />
            <br />
            <span>
              Si obtienes un <strong>uno (1)</strong>{" "}
              <span className="dangerText">perderas todos tus puntos</span> y{" "}
              <span className="dangerText">quedarás eliminado</span>
            </span>
            <br />
            <br />
            <span>
              Puedes decidir{" "}
              <strong>detenerte para conservar tus puntos</strong> en cualquier
              momento
            </span>
          </p>
          <button class="btn" onClick={goToGame}>
            Vamos a Jugar
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Welcome;
