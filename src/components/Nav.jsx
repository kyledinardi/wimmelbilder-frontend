import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Counter from './Counter.jsx';

function Nav({ isGame, characters }) {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/high-scores'>High Scores</Link>
      {isGame && (
        <>
          <Counter />
          {characters.map((character) => (
            <div key={character.name}>
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
