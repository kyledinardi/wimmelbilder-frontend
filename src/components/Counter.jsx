import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from '../style/Nav.module.css';

function Counter({ isGameOver, setTimerValue }) {
  const [counter, setCounter] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  function padNumber(num) {
    return num.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  }

  useEffect(() => {
    const key = setInterval(() => {
      setCounter((count) => count + 1);
    }, 10);

    if (isGameOver) {
      clearInterval(key);
      setTimerValue(
        `${padNumber(minutes)}:${padNumber(seconds)}:${padNumber(counter)}`,
      );
    }

    return () => {
      clearInterval(key);
    };
  }, [isGameOver, counter, seconds, minutes, setTimerValue]);

  if (counter % 100 === 0 && counter !== 0) {
    setCounter(0);
    setSeconds(seconds + 1);
  }
  if (seconds % 60 === 0 && seconds !== 0) {
    setSeconds(0);
    setMinutes(minutes + 1);
  }

  return (
    <p className={styles.timer}>
      {`${padNumber(minutes)}:${padNumber(seconds)}:${padNumber(counter)}`}
    </p>
  );
}

Counter.propTypes = {
  isGameOver: PropTypes.bool,
  setTimerValue: PropTypes.func,
};

export default Counter;
