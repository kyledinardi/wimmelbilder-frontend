import { useOutletContext } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import Dropdown from './Dropdown.jsx';
import PopUp from './PopUp.jsx';
import convention from '../img/convention.webp';
import conventionHalf from '../img/convention-half.webp';
import benson from '../img/benson.png';
import kermitTheFrog from '../img/kermit-the-frog.png';
import waylonSmithers from '../img/waylon-smithers.png';
import styles from '../style/Game.module.css';

function Convention() {
  const [setIsGame, setCharacters, setIsGameOver, isGame, characters] =
    useOutletContext();

  const [popUpCharacterName, setPopUpCharacterName] = useState('');
  const [popUpVisible, setPopUpVisible] = useState(false);
  const [popUpFound, setPopUpFound] = useState(false);
  const [coordinates, setCoordinates] = useState('');

  const [dropdownInlineStyles, setDropdownInlineStyles] = useState({
    display: 'none',
  });

  const popUpTimer = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsGame(true);

    setCharacters([
      { name: 'Benson', img: benson },
      { name: 'Kermit the Frog', img: kermitTheFrog },
      { name: 'Waylon Smithers', img: waylonSmithers },
    ]);
  }, [setIsGame, setCharacters]);

  useEffect(() => {
    if (characters) {
      if (characters.every((character) => character.found)) {
        setIsGameOver(true);
      }
    }
  }, [characters, setIsGameOver]);

  function handleClick(e) {
    const display = dropdownInlineStyles.display === 'none' ? 'block' : 'none';
    let x;
    let y;

    let top = null;
    let left = null;
    let bottom = null;
    let right = null;

    if (display === 'block') {
      x = Math.round((e.nativeEvent.offsetX / e.target.width) * 3600);
      y = Math.round((e.nativeEvent.offsetY / e.target.height) * 2544);

      if (e.nativeEvent.offsetX > e.target.width - 195) {
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
    setDropdownInlineStyles({ display, top, left, bottom, right });
  }

  function displayPopUp(characterName, found) {
    if (found) {
      setPopUpFound(true);
    } else {
      setPopUpFound(false);
    }

    setPopUpCharacterName(characterName);
    setPopUpVisible(true);
    clearTimeout(popUpTimer.current);
    popUpTimer.current = setTimeout(() => setPopUpVisible(false), 3000);
  }

  if (isGame) {
    return (
      <div className={styles.illustrationContainer}>
        <img
          onClick={(e) => handleClick(e)}
          className={styles.fullIllustration}
          srcSet={`${conventionHalf} 1800w, ${convention} 3600w`}
          sizes='(max-width: 600px) 1800px, 3600px'
          src={convention}
          alt='Convention'
        />
        <Dropdown
          illustration='convention'
          characters={characters}
          setCharacters={(c) => setCharacters(c)}
          inlineStyles={dropdownInlineStyles}
          coordinates={coordinates}
          displayPopUp={displayPopUp}
          setDropdownInlineStyles={setDropdownInlineStyles}
        />
        {popUpVisible && (
          <PopUp characterName={popUpCharacterName} found={popUpFound} />
        )}
      </div>
    );
  }
}

export default Convention;
