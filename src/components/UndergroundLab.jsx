import { useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Dropdown from './Dropdown.jsx';
import undergroundLab from '../img/underground-lab.webp';
import undergroundLabHalf from '../img/underground-lab-half.webp';
import godzilla from '../img/godzilla.png';
import r2d2 from '../img/r2d2.png';
import waldo from '../img/waldo.png';
import styles from '../style/Game.module.css';

function UndergroundLab() {
  const [setIsGame, setCharacters, isGame, characters] = useOutletContext();
  const [inlineStyles, setInlineStyles] = useState({ display: 'none' });
  const [coordinates, setCoordinates] = useState('');

  useEffect(() => {
    setIsGame(true);
    window.scrollTo(0, 0);

    setCharacters([
      { name: 'Godzilla', img: godzilla },
      { name: 'R2D2', img: r2d2 },
      { name: 'Waldo', img: waldo },
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
      x = Math.round((e.nativeEvent.offsetX / e.target.width) * 1920);
      y = Math.round((e.nativeEvent.offsetY / e.target.height) * 2715);

      if (e.nativeEvent.offsetX > e.target.width - 143) {
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
          srcSet={`${undergroundLabHalf} 960w, ${undergroundLab} 1920w`}
          sizes='(max-width: 600px) 960px, 1920px'
          src={undergroundLab}
          alt='Underground Lab'
        />
        <Dropdown
          illustration='undergroundLab'
          characters={characters.current}
          inlineStyles={inlineStyles}
          coordinates={coordinates}
        />
      </div>
    );
  }
}

export default UndergroundLab;
