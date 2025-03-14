import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
import Game from './Game.jsx';
import cyberpunkCity from '../img/cyberpunk-city.webp';
import cyberpunkCityHalf from '../img/cyberpunk-city-half.webp';
import batman from '../img/batman.webp';
import jabbaTheHutt from '../img/jabba-the-hutt.webp';
import tomCat from '../img/tom-cat.webp';

function CyberpunkCity() {
  const [
    setIsGame,
    setCharacters,
    setIsGameOver,
    isGame,
    characters,
    isGameOver,
    timerValue,
  ] = useOutletContext();

  useEffect(() => {
    setIsGame(true);
    setIsGameOver(false);
    window.scrollTo(0, 0);

    setCharacters([
      { name: 'Batman', img: batman },
      { name: 'Jabba the Hutt', img: jabbaTheHutt },
      { name: 'Tom Cat', img: tomCat },
    ]);
  }, [setIsGame, setIsGameOver, setCharacters]);

  if (isGame) {
    return (
      <Game
        setCharacters={(c) => setCharacters(c)}
        setIsGameOver={(g) => setIsGameOver(g)}
        characters={characters}
        isGameOver={isGameOver}
        timerValue={timerValue}
        imageObj={{
          name: 'cyberpunkCity',
          full: cyberpunkCity,
          half: cyberpunkCityHalf,
          width: 1988,
          height: 3708,
        }}
        dropdownDimensions={{ width: 181, height: 217 }}
      />
    );
  }
}

export default CyberpunkCity;
