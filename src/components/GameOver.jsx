import PropTypes from 'prop-types';
import styles from '../style/GameOver.module.css';

function GameOver({ timerValue }) {
  function submitHighScore(e) {}

  return (
    <form className={styles.gameOverForm} onSubmit={(e) => submitHighScore(e)}>
      <h2>Congratulations!</h2>
      <h3>
        You found every character in <span>{timerValue}</span>
      </h3>
      <p>Enter your name to save your score</p>
      <input type='text' name='score' id='score' />
      <button>Submit</button>
    </form>
  );
}

GameOver.propTypes = {
  timerValue: PropTypes.string,
};

export default GameOver;
