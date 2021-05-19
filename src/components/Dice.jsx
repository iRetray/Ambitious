import React, { Fragment } from "react";

const Dice = () => {
  return (
    <Fragment>
      <div class="DiceContainer dice">
        <ol class="die-list odd-roll" data-roll="1" id="die-2">
          <li class="die-item" data-side="1">
            <span class="dot"></span>
          </li>
          <li class="die-item" data-side="2">
            <span class="dot"></span>
            <span class="dot"></span>
          </li>
          <li class="die-item" data-side="3">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </li>
          <li class="die-item" data-side="4">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </li>
          <li class="die-item" data-side="5">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </li>
          <li class="die-item" data-side="6">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </li>
        </ol>
      </div>
    </Fragment>
  );
};

export default Dice;
