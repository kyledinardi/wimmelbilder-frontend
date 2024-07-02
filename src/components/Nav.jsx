import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Counter from './Counter.jsx';
import styles from '../style/Nav.module.css';

function Nav({ isGame, characters }) {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.navLink} to='/'>
        Home
      </Link>
      <Link className={styles.navLink} to='/high-scores'>
        High Scores
      </Link>
      {isGame && (
        <>
          <Counter />
          {characters.map((character) => (
            <div className={styles.character} key={character.name}>
              <img src={character.img} alt='' />
              <p>{character.name}</p>
            </div>
          ))}
        </>
      )}
    </nav>
  );
}

Nav.propTypes = {
  isGame: PropTypes.bool,
  characters: PropTypes.array,
};

export default Nav;
