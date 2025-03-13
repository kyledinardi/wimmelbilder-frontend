import PropTypes from 'prop-types';
import styles from '../style/Dropdown.module.css';

function Dropdown({
  illustration,
  characters,
  setCharacters,
  inlineStyles,
  coordinates,
  displayPopUp,
  setDropdownInlineStyles,
}) {
  async function handleClick(e) {
    const [x, y] = coordinates.split(' ').map(Number);
    const charName = e.currentTarget.dataset.name;

    const responseStream = await fetch(
      `${
        import.meta.env.VITE_BACKEND_URL
      }/characters?name=${charName}&illustration=${illustration}&x=${x}&y=${y}`,
    );

    const response = await responseStream.json();

    if (response.found) {
      const newCharacters = characters.map((character) => {
        if (character.name === charName) {
          return { ...character, x, y, found: true };
        }

        return character;
      });

      setCharacters(newCharacters);
    }

    setDropdownInlineStyles({ display: 'none' });
    displayPopUp(charName, response.found);
  }

  return (
    <div className={styles.dropdown} style={inlineStyles}>
      {characters.map(
        (character) =>
          !character.found && (
            <button
              onClick={(e) => handleClick(e)}
              className={styles.character}
              data-name={character.name}
              key={character.name}
            >
              <img src={character.img} alt='' />
              <p>{character.name}</p>
            </button>
          ),
      )}
    </div>
  );
}

Dropdown.propTypes = {
  illustration: PropTypes.string,
  characters: PropTypes.array,
  setCharacters: PropTypes.func,
  inlineStyles: PropTypes.object,
  coordinates: PropTypes.string,
  displayPopUp: PropTypes.func,
  setDropdownInlineStyles: PropTypes.func,
};

export default Dropdown;
