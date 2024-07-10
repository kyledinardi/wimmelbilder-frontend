import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
import Game from './Game.jsx';
import undergroundLab from '../img/underground-lab.webp';
import undergroundLabHalf from '../img/underground-lab-half.webp';
import godzilla from '../img/godzilla.png';
import r2d2 from '../img/r2d2.png';
import waldo from '../img/waldo.png';

function UndergroundLab() {
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
      { name: 'Godzilla', img: godzilla },
      { name: 'R2D2', img: r2d2 },
      { name: 'Waldo', img: waldo },
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
          name: 'undergroundLab',
          full: undergroundLab,
          half: undergroundLabHalf,
          width: 1920,
          height: 2715,
        }}
        dropdownDimensions={{ width: 143, height: 217 }}
      />
    );
  }
}

export default UndergroundLab;
