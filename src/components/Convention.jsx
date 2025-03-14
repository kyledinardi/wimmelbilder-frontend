import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
import Game from './Game.jsx';
import convention from '../img/convention.webp';
import conventionHalf from '../img/convention-half.webp';
import benson from '../img/benson.webp';
import kermitTheFrog from '../img/kermit-the-frog.webp';
import waylonSmithers from '../img/waylon-smithers.webp';

function Convention() {
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
    window.scrollTo(0, 0);
    setIsGame(true);
    setIsGameOver(false);

    setCharacters([
      { name: 'Benson', img: benson },
      { name: 'Kermit the Frog', img: kermitTheFrog },
      { name: 'Waylon Smithers', img: waylonSmithers },
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
          name: 'convention',
          full: convention,
          half: conventionHalf,
          width: 3600,
          height: 2544,
        }}
        dropdownDimensions={{ width: 195, height: 217 }}
      />
    );
  }
}

export default Convention;
