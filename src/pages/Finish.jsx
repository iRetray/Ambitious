/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from "react";

const Finish = ({ history }) => {
  const [results, setResults] = useState(null);

  useEffect(() => {
    if (history.location.results) {
      setResults(history.location.results);
    } else {
      goToGame();
    }
  }, []);

  const goToGame = () => {
    history.push({
      pathname: "/game",
    });
  };

  return (
    <Fragment>
      <div className="WelcomeMainContainer">
        <div className="textContainer" style={{ backgroundColor: "#cf1322" }}>
          <span className="titleGame">AMBITIOUS</span>
          <br />
          <p className="instructions">
            <span>
              <strong>JUEGO TERMINADO</strong>
            </span>
            <br />
            <br />
            <span>
              <span>
                Has obtenido <strong>{results && results.points} puntos</strong>
              </span>
              <br />
              <span>
                Has lanzado <strong>{results && results.launchs} veces</strong>
              </span>
            </span>
            <br />
            <br />
            <span>
              <span
                className="dangerText"
                style={{ fontSize: "5vh", lineHeight: "1" }}
              >
                ¿Acaso te ha consumido la avaricia?
              </span>
            </span>
          </p>
          <button class="btn" onClick={goToGame}>
            Quiero intentarlo de nuevo
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Finish;
