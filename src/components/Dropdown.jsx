import PropTypes from 'prop-types';
import styles from '../style/Dropdown.module.css';

function Dropdown({ characters, inlineStyles }) {
  return (
    <div className={styles.dropdown} style={inlineStyles}>
      {characters.map((character) => (
        <div className={styles.character} key={character.name}>
          <img src={character.img} alt='' />
          <p>{character.name}</p>
        </div>
      ))}
    </div>
  );
}

Dropdown.propTypes = {
  characters: PropTypes.array,
  inlineStyles: PropTypes.object,
};

export default Dropdown;
