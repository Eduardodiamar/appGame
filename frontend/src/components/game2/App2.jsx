import React from 'react';
import Tamagotchi from './Tamagotchi';
import './App.css';

const App2 = () => {
  const reset = () => {
    window.location.reload();
  };

  const info = () => {
    alert('¡Bienvenido a Tamagotchi! Cuida a tu mascota virtual alimentándola, jugando con ella, bañándola y haciendo que duerma. La salud, felicidad, limpieza y energía del tamagotchi disminuirán con el tiempo, así que asegúrate de cuidarla bien.');
  };

  return (
    <div className="app bg-gray-800 text-white">
      <h1>Tamagotchi</h1>
      <Tamagotchi />
      <div className="buttons">
        <button onClick={reset}>Reiniciar</button>
        <button onClick={info}>Información</button>
      </div>
    </div>
  );
};

export default App2;
