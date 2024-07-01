import { useOutletContext } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import cyberpunkCity from '../img/cyberpunk-city.webp';
import batman from '../img/batman.png';
import jabbaTheHutt from '../img/jabba-the-hutt.png';
import tomCat from '../img/tom-cat.png';

function CyberpunkCity() {
  const [setIsGame, setCharacters] = useOutletContext();

  const characters = useRef([
    { name: 'Batman', img: batman },
    { name: 'Jabba the Hutt', img: jabbaTheHutt },
    { name: 'Tom Cat', img: tomCat },
  ]);

  useEffect(() => {
    setIsGame(true);
    setCharacters(characters.current);
  }, [setIsGame, setCharacters]);

  return <img src={cyberpunkCity} alt='Cyberpunk City' />;
}

export default CyberpunkCity;
