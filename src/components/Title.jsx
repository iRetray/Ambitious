import React, { Fragment } from "react";

const Title = ({ points, launchs }) => {
  return (
    <Fragment>
      <div className="TitleMainContainer">
        <span className="gameName">AMBITIOUS</span>
        <br />
        <br />
        <span className="points">
          {points === 0 ? "Lanza para comenzar" : points + " puntos"}
        </span>
        <br />
        <span className="points">
          {launchs === 0 ? "" : launchs + " lanzamientos"}
        </span>
      </div>
    </Fragment>
  );
};

export default Title;
