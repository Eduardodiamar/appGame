import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Avatar from './Avatar';
import FeedButton from './Buttons/FeedButton';
import PlayButton from './Buttons/PlayButton';
import CleanButton from './Buttons/CleanButton';
import SleepButton from './Buttons/SleepButton';
import Age from './Age';
import PropertyBar from './PropertyBar';
import tamagotchiImage from "/src/assets/tamagotchi.png";


const Tamagotchi = () => {
  const [name, setName] = useState('');
  const [isName, setIsName] = useState(false);
  const [health, setHealth] = useState(100);
  const [happiness, setHappiness] = useState(100);
  const [cleanliness, setCleanliness] = useState(100);
  const [energy, setEnergy] = useState(100);
  const [age, setAge] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (playing) {
      const interval = setInterval(() => {
        setHealth(health => health - 1);
        setHappiness(happiness => happiness - 1);
        setCleanliness(cleanliness => cleanliness - 1);
        setEnergy(energy => energy - 1);
        setAge(age => age + 0.1);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [playing]);

  useEffect(() => {
    if (health <= 0) {
      endGame()
    }
  }, [health]);

  const handleStart = () => {
    setPlaying(true);
    setIsName(true)
  };
  const endGame = () => {
    setPlaying(false);
    const tamagotchiData = {
      fechaNacimiento: date,
      nombre: name,
      nivelSalud: health,
      nivelEnergia: energy,
      nivelFelicidad: happiness,
    };

    // Realizar la solicitud POST a la API
    fetch('http://localhost:3000/mascotas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tamagotchiData),
    })
      .then((response) => {
        // Manejar la respuesta de la API
        if (response.ok) {
          console.log('Datos del Tamagotchi enviados correctamente.');
        } else {
          console.log('Error al enviar los datos del Tamagotchi.');
        }
      })
      .catch((error) => {
        console.log('Error en la solicitud POST:', error);
      });
  };


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

  const date = new Date();


  return (
    <>

      <Link to='/'> <button className='flex mb-5'>Return</button></Link>
      {!isName && (
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <button onClick={handleStart}>Start</button>
        </div>
      )}

      {playing ? (
        <div className="tamagotchi">
          <h1>{name}</h1>
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
      ) : (
        <div className="game-over">
          <h1>Game Over</h1>
        </div>
      )}
    </>
  );
}


export default Tamagotchi;
