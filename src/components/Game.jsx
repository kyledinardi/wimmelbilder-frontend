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
  const [dropdownStyles, setDropdownStyles] = useState({ display: 'none' });

  const popUpTimer = useRef(null);

  useEffect(() => {
    if (characters) {
      if (characters.every((character) => character.found)) {
        setIsGameOver(true);
      }
    }
  }, [characters, setIsGameOver]);

  function handleClick(e) {
    const display = dropdownStyles.display === 'none' ? 'block' : 'none';
    const { offsetX, offsetY } = e.nativeEvent;
    const { width, height } = e.target;
    let x;
    let y;

    let left;
    let right;
    let top;
    let bottom;

    if (display === 'block') {
      x = Math.round((offsetX / width) * imageObj.width);
      y = Math.round((offsetY / height) * imageObj.height);

      if (offsetX > width - dropdownDimensions.width) {
        right = width - offsetX;
      } else {
        left = offsetX;
      }

      if (offsetY > height - dropdownDimensions.height) {
        bottom = height - offsetY;
      } else {
        top = offsetY;
      }
    }

    setCoordinates(`${x} ${y}`);
    setDropdownStyles({ display, top, left, bottom, right });
  }

  function displayPopUp(characterName, isFound) {
    setPopUpFound(isFound);
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
          inlineStyles={dropdownStyles}
          coordinates={coordinates}
          displayPopUp={(c, f) => displayPopUp(c, f)}
          setDropdownInlineStyles={(s) => setDropdownStyles(s)}
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
      {isGameOver && (
        <GameOver timerValue={timerValue} illustration={imageObj.name} />
      )}
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
