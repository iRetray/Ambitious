import React, { Fragment, useState } from "react";

import Title from "../components/Title";
import Button from "../components/Button";
import Dice from "../components/Dice";

const AmbitiousGame = ({ history }) => {
  const [points, setPoints] = useState(0);
  const [counterLaunchs, setCounterLaunchs] = useState(0);

  const goToFinishPage = () => {
    history.push({
      pathname: "/finish",
      results: {
        points: points,
        launchs: counterLaunchs,
      },
    });
  };

  const getResultNumber = () => {
    const resultDice = document.querySelector(".DiceContainer ol").dataset.roll;
    setTimeout(function () {
      setCounterLaunchs(counterLaunchs + 1);
      const numberDice = parseInt(resultDice);
      if (numberDice === 1) {
        goToFinishPage();
      } else {
        setPoints(points + numberDice);
      }
    }, 1500);
  };

  const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const toggleClasses = (die) => {
    die.classList.toggle("odd-roll");
    die.classList.toggle("even-roll");
  };

  const rollDice = () => {
    const dice = [...document.querySelectorAll(".die-list")];
    dice.forEach((die) => {
      toggleClasses(die);
      die.dataset.roll = getRandomNumber(1, 6);
    });
    getResultNumber();
  };

  return (
    <Fragment>
      <Title points={points} launchs={counterLaunchs} />
      <Dice />
      <Button rollDice={rollDice} />
    </Fragment>
  );
};

export default AmbitiousGame;
