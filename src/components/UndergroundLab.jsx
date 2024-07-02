import { useOutletContext } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import undergroundLab from '../img/underground-lab.webp';
import undergroundLabHalf from '../img/underground-lab-half.webp';
import godzilla from '../img/godzilla.png';
import r2d2 from '../img/r2d2.png';
import waldo from '../img/waldo.png';
import styles from '../style/Game.module.css';

function UndergroundLab() {
  const [setIsGame, setCharacters, isGame] = useOutletContext();

  const characters = useRef([
    { name: 'Godzilla', img: godzilla },
    { name: 'R2D2', img: r2d2 },
    { name: 'Waldo', img: waldo },
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
          srcSet={`${undergroundLabHalf} 960w, ${undergroundLab} 1920w`}
          sizes='(max-width: 600px) 960px, 1920px'
          src={undergroundLab}
          alt='Underground Lab'
        />
      </div>
    );
  }
}

export default UndergroundLab;
