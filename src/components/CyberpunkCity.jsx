import { useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Dropdown from './Dropdown.jsx';
import cyberpunkCity from '../img/cyberpunk-city.webp';
import cyberpunkCityHalf from '../img/cyberpunk-city-half.webp';
import batman from '../img/batman.png';
import jabbaTheHutt from '../img/jabba-the-hutt.png';
import tomCat from '../img/tom-cat.png';
import styles from '../style/Game.module.css';

function CyberpunkCity() {
  const [setIsGame, setCharacters, isGame, characters] = useOutletContext();
  const [inlineStyles, setInlineStyles] = useState({ display: 'none' });
  const [coordinates, setCoordinates] = useState('');

  useEffect(() => {
    setIsGame(true);
    window.scrollTo(0, 0);

    setCharacters([
      { name: 'Batman', img: batman },
      { name: 'Jabba the Hutt', img: jabbaTheHutt },
      { name: 'Tom Cat', img: tomCat },
    ]);
  }, [setIsGame, setCharacters]);

  function handleClick(e) {
    const display = inlineStyles.display === 'none' ? 'block' : 'none';
    let x;
    let y;
    let top = null;
    let left = null;
    let bottom = null;
    let right = null;

    if (display === 'block') {
      x = Math.round((e.nativeEvent.offsetX / e.target.width) * 1988);
      y = Math.round((e.nativeEvent.offsetY / e.target.height) * 3708);

      if (e.nativeEvent.offsetX > e.target.width - 181) {
        right = e.target.width - e.nativeEvent.offsetX;
      } else {
        left = e.nativeEvent.offsetX;
      }

      if (e.nativeEvent.offsetY > e.target.height - 217) {
        bottom = e.target.height - e.nativeEvent.offsetY;
      } else {
        top = e.nativeEvent.offsetY;
      }
    }

    setCoordinates(`${x} ${y}`);
    setInlineStyles({ display, top, left, bottom, right });
  }

  if (isGame) {
    return (
      <div className={styles.illustrationContainer}>
        <img
          onClick={(e) => handleClick(e)}
          className={styles.fullIllustration}
          srcSet={`${cyberpunkCityHalf} 994w, ${cyberpunkCity} 1988w`}
          sizes='(max-width: 600px) 994px, 1988px'
          src={cyberpunkCity}
          alt='Cyberpunk City'
        />
        <Dropdown
          illustration='cyberpunkCity'
          characters={characters.current}
          inlineStyles={inlineStyles}
          coordinates={coordinates}
        />
      </div>
    );
  }
}

export default CyberpunkCity;
