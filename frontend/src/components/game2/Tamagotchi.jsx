import React, { useState, useEffect } from 'react';
import Avatar from './Avatar';
import FeedButton from './Buttons/FeedButton';
import PlayButton from './Buttons/PlayButton';
import CleanButton from './Buttons/CleanButton';
import SleepButton from './Buttons/SleepButton';
import Age from './Age';
import PropertyBar from './PropertyBar';
import tamagotchiImage from "/src/assets/tamagotchi.png";


const Tamagotchi = () => {
  const [health, setHealth] = useState(100);
  const [happiness, setHappiness] = useState(100);
  const [cleanliness, setCleanliness] = useState(100);
  const [energy, setEnergy] = useState(100);
  const [age, setAge] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHealth(health - 1);
      setHappiness(happiness - 1);
      setCleanliness(cleanliness - 1);
      setEnergy(energy - 1);
      setAge(age + 0.1);
    }, 1000);
    return () => clearInterval(interval);
  }, [health, happiness, cleanliness, energy, age]);

  let play = () => {
    if (happiness <= 80 && energy >= 10) {
      setHappiness(happiness + 20);
      setEnergy(energy - 10);
    }
    if (happiness > 100) setHappiness(100);
    if (energy < 0) setEnergy(0);
  };

let feed = () => {
  if (health <= 90) {
    setHealth(health + 10);
  } else {
    setHealth(100);
  }

  if (happiness <= 90) {
    setHappiness(happiness + 10);
  } else {
    setHappiness(100);
  }
};

let clean = () => {
  if (cleanliness <= 80) {
    setCleanliness(cleanliness + 20);
  } else {
    setCleanliness(100);
  }
};

const sleep = () => {
  if (energy <= 80) {
    setEnergy(energy + 20);
  } else {
    setEnergy(100);
  }
};


  return (
    <div className="tamagotchi">
    <div className="avatar flex justify-center">
      <Avatar image={tamagotchiImage} className='' />
    </div>

      <div className='statusBars'>
        <PropertyBar value={health} max={100} label="Salud" />
        <PropertyBar value={happiness} max={100} label="Felicidad" />
        <PropertyBar value={cleanliness} max={100} label="Limpieza" />
        <PropertyBar value={energy} max={100} label="Energía" />
        <Age age={Math.round(age) + 1} />
      </div>

      <div className='buttons'>
        <FeedButton onClick={feed} disabled={health <= 0} />
        <PlayButton onClick={play} disabled={health <= 0} />
        <CleanButton onClick={clean} disabled={health <= 0} />
        <SleepButton onClick={sleep} disabled={health <= 0} />
      </div>

    </div>

  );
};

export default Tamagotchi;
