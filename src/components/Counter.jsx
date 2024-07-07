import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from '../style/Nav.module.css';

function Counter({ isGameOver }) {
  const [counter, setCounter] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setCounter((count) => count + 1);
    }, 10);

    if (isGameOver) {
      clearInterval(key);
    }

    return () => {
      clearInterval(key);
    };
  }, [isGameOver]);

  if (counter % 100 === 0 && counter !== 0) {
    setCounter(0);
    setSeconds(seconds + 1);
  }
  if (seconds % 60 === 0 && seconds !== 0) {
    setSeconds(0);
    setMinutes(minutes + 1);
  }

  function padNumber(num) {
    return num.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  }

  return (
    <p className={styles.timer}>
      {`${padNumber(minutes)}:${padNumber(seconds)}:${padNumber(counter)}`}
    </p>
  );
}

Counter.propTypes = {
  isGameOver: PropTypes.bool,
};

export default Counter;
