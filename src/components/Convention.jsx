import { useOutletContext } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import convention from '../img/convention.webp';
import conventionHalf from '../img/convention-half.webp';
import benson from '../img/benson.png';
import kermitTheFrog from '../img/kermit-the-frog.png';
import waylonSmithers from '../img/waylon-smithers.png';
import styles from '../style/Game.module.css';

function Convention() {
  const [setIsGame, setCharacters, isGame] = useOutletContext();

  const characters = useRef([
    { name: 'Benson', img: benson },
    { name: 'Kermit the Frog', img: kermitTheFrog },
    { name: 'Waylon Smithers', img: waylonSmithers },
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
          srcSet={`${conventionHalf} 1800w, ${convention} 3600w`}
          sizes='(max-width: 600px) 1800px, 3600px'
          src={convention}
          alt='Convention'
        />
      </div>
    );
  }
}

export default Convention;
