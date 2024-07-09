import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown.jsx';
import PopUp from './PopUp.jsx';
import GameOver from './GameOver.jsx';
import styles from '../style/Game.module.css';

function Game({
  setCharacters,
  setIsGameOver,
  characters,
  isGameOver,
  timerValue,
  imageObj,
  dropdownDimensions,
}) {
  const [popUpCharacterName, setPopUpCharacterName] = useState('');
  const [popUpVisible, setPopUpVisible] = useState(false);
  const [popUpFound, setPopUpFound] = useState(false);
  const [coordinates, setCoordinates] = useState('');

  const [dropdownInlineStyles, setDropdownInlineStyles] = useState({
    display: 'none',
  });

  const popUpTimer = useRef(null);

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
      x = Math.round((e.nativeEvent.offsetX / e.target.width) * imageObj.width);

      y = Math.round(
        (e.nativeEvent.offsetY / e.target.height) * imageObj.height,
      );

      if (e.nativeEvent.offsetX > e.target.width - dropdownDimensions.width) {
        right = e.target.width - e.nativeEvent.offsetX;
      } else {
        left = e.nativeEvent.offsetX;
      }

      if (e.nativeEvent.offsetY > e.target.height - dropdownDimensions.height) {
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

  return (
    <div className={styles.externalContainer}>
      <div className={styles.internalContainer}>
        <img
          onClick={(e) => handleClick(e)}
          className={styles.fullIllustration}
          srcSet={`${imageObj.half} ${imageObj.width / 2}w, ${imageObj.full} ${
            imageObj.width
          }w`}
          sizes={`(max-width: 600px) ${imageObj.width / 2}px, ${
            imageObj.width
          }px`}
          src={imageObj.full}
          alt={imageObj.name}
        />
        <Dropdown
          illustration={imageObj.name}
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
        {characters.map(
          (character) =>
            character.found && (
              <div
                key={character.name}
                className={styles.foundCircle}
                style={{
                  left: `calc((100% / ${imageObj.width} * ${character.x} - 50px))`,
                  top: `calc((100% / ${imageObj.height} * ${character.y} - 50px))`,
                }}
              ></div>
            ),
        )}
      </div>
      {isGameOver && <GameOver timerValue={timerValue} />}
    </div>
  );
}

Game.propTypes = {
  setCharacters: PropTypes.func,
  setIsGameOver: PropTypes.func,
  characters: PropTypes.array,
  isGameOver: PropTypes.bool,
  timerValue: PropTypes.string,
  imageObj: PropTypes.object,
  dropdownDimensions: PropTypes.object,
};

export default Game;
