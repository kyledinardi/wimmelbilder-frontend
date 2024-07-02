import { useOutletContext } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import cyberpunkCity from '../img/cyberpunk-city.webp';
import cyberpunkCityHalf from '../img/cyberpunk-city-half.webp';
import batman from '../img/batman.png';
import jabbaTheHutt from '../img/jabba-the-hutt.png';
import tomCat from '../img/tom-cat.png';
import styles from '../style/Game.module.css';

function CyberpunkCity() {
  const [setIsGame, setCharacters, isGame] = useOutletContext();

  const characters = useRef([
    { name: 'Batman', img: batman },
    { name: 'Jabba the Hutt', img: jabbaTheHutt },
    { name: 'Tom Cat', img: tomCat },
  ]);

  useEffect(() => {
    setIsGame(true);
    setCharacters(characters.current);
    window.scrollTo(0, 0);
  }, [setIsGame, setCharacters]);

  if (isGame) {
    return (
      <div className={styles.illustrationContainer}>
        <img
          className={styles.fullIllustration}
          srcSet={`${cyberpunkCityHalf} 994w, ${cyberpunkCity} 1988w`}
          sizes='(max-width: 600px) 994px, 1988px'
          src={cyberpunkCity}
          alt='Cyberpunk City'
        />
      </div>
    );
  }
}

export default CyberpunkCity;
