import { useOutletContext } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import convention from '../img/convention.webp';
import benson from '../img/benson.png';
import kermitTheFrog from '../img/kermit-the-frog.png';
import waylonSmithers from '../img/waylon-smithers.png';

function Convention() {
  const [setIsGame, setCharacters] = useOutletContext();

  const characters = useRef([
    { name: 'Benson', img: benson },
    { name: 'Kermit the Frog', img: kermitTheFrog },
    { name: 'Waylon Smithers', img: waylonSmithers },
  ]);

  useEffect(() => {
    setIsGame(true);
    setCharacters(characters.current);
  }, [setIsGame, setCharacters]);

  return <img src={convention} alt='Convention' />;
}

export default Convention;
