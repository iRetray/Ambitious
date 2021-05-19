import React, { Fragment } from "react";

const Button = ({ rollDice }) => {
  return (
    <Fragment>
      <span class="button" onClick={() => rollDice()}>
        ¡Lanzar!
      </span>
    </Fragment>
  );
};

export default Button;
