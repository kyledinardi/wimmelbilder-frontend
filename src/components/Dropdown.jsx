import PropTypes from 'prop-types';
import styles from '../style/Dropdown.module.css';

function Dropdown({ illustration, characters, inlineStyles, coordinates }) {
  async function handleClick(e) {
    const selectedCoords = {
      x: parseInt(coordinates.split(' ')[0], 10),
      y: parseInt(coordinates.split(' ')[1], 10),
    };

    const character = e.currentTarget.dataset.name;

    const responseStream = await fetch('http://localhost:3000/characters', {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ selectedCoords, character, illustration }),
    });

    const response = await responseStream.json();

    if (response.found) {
      console.log(`You found ${character}`);
    } else {
      console.log(`${character} is somewhere else`);
    }
  }

  return (
    <div className={styles.dropdown} style={inlineStyles}>
      {characters.map((character) => (
        <button
          onClick={(e) => handleClick(e)}
          className={styles.character}
          data-name={character.name}
          key={character.name}
        >
          <img src={character.img} alt='' />
          <p>{character.name}</p>
        </button>
      ))}
    </div>
  );
}

Dropdown.propTypes = {
  illustration: PropTypes.string,
  characters: PropTypes.array,
  inlineStyles: PropTypes.object,
  coordinates: PropTypes.string,
};

export default Dropdown;
