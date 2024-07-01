import { useOutletContext } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import undergroundLab from '../img/underground-lab.webp';
import godzilla from '../img/godzilla.png';
import r2d2 from '../img/r2d2.png';
import waldo from '../img/waldo.png';

function UndergroundLab() {
  const [setIsGame, setCharacters] = useOutletContext();

  const characters = useRef([
    { name: 'Godzilla', img: godzilla },
    { name: 'R2D2', img: r2d2 },
    { name: 'Waldo', img: waldo },
  ]);

  useEffect(() => {
    setIsGame(true);
    setCharacters(characters.current);
  }, [setIsGame, setCharacters]);

  return <img src={undergroundLab} alt='Underground Lab' />;
}

export default UndergroundLab;
