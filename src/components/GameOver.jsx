import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from '../style/GameOver.module.css';

function GameOver({ timerValue, illustration }) {
  const [inputDisplayed, setInputDisplayed] = useState(true);

  async function submitHighScore(e) {
    e.preventDefault();

    await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/high-scores`,

      {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target[0].value,
          score: timerValue,
          illustration,
        }),
      },
    );

    setInputDisplayed(false);
  }

  return (
    <form className={styles.gameOverForm} onSubmit={(e) => submitHighScore(e)}>
      <h2>Congratulations!</h2>
      <h3>
        You found every character in <span>{timerValue}</span>
      </h3>
      {inputDisplayed && (
        <>
          <p>Enter your name to save your score</p>
          <input type='text' name='name' id='name' maxLength='31' required />
          <button>Submit</button>
        </>
      )}
    </form>
  );
}

GameOver.propTypes = {
  timerValue: PropTypes.string,
  illustration: PropTypes.string,
};

export default GameOver;
