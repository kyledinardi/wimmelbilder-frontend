import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import conventionHalf from '../img/convention-half.webp';
import cyberpunkCityHalf from '../img/cyberpunk-city-half.webp';
import undergroundLabHalf from '../img/underground-lab-half.webp';
import styles from '../style/HighScores.module.css';

function HighScores() {
  const [highScores, setHighScores] = useState(null);
  const [currentIllustration, setCurrentIllustration] = useState('convention');
  const [setIsGame] = useOutletContext();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/high-scores`, {
      mode: 'cors',
    })
      .then((response) => response.json())

      .then((response) => {
        const newHighScores = {};

        response.highScores.forEach((highScore) => {
          if (!newHighScores[highScore.illustration]) {
            newHighScores[highScore.illustration] = [highScore];
          } else {
            newHighScores[highScore.illustration].push(highScore);
          }
        });

        setHighScores(newHighScores);
      });
  }, []);

  useEffect(() => {
    setIsGame(false);
  }, [setIsGame]);

  function unCamelCase(illustrationName) {
    return illustrationName
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase());
  }

  return (
    <div className={styles.highScorePage}>
      <h1>High Scores</h1>
      <div className={styles.buttons}>
        <button onClick={() => setCurrentIllustration('convention')}>
          <img src={conventionHalf} alt='Convention' />
        </button>
        <button onClick={() => setCurrentIllustration('cyberpunkCity')}>
          <img src={cyberpunkCityHalf} alt='Cyberpunk City' />
        </button>
        <button onClick={() => setCurrentIllustration('undergroundLab')}>
          <img src={undergroundLabHalf} alt='Underground Lab' />
        </button>
      </div>
      {!highScores ? (
        <h2>Loading High Scores...</h2>
      ) : (
        <div className={styles.scoreSection}>
          <h2>{unCamelCase(currentIllustration)}</h2>
          <table className={styles.scoreList}>
            <thead>
              <tr>
                <th scope='col'>Rank</th>
                <th scope='col'>Name</th>
                <th scope='col'>Time</th>
                <th scope='col'>Date</th>
              </tr>
            </thead>
            <tbody>
              {!highScores[currentIllustration] ? (
                <tr>
                  <td colSpan='100%'>No high scores yet</td>
                </tr>
              ) : (
                highScores[currentIllustration].map((highScore, i) => (
                  <tr key={highScore.id}>
                    <th scope='row'>{i + 1}</th>
                    <td>{highScore.name}</td>
                    <td>{highScore.score}</td>
                    <td>{new Date(highScore.date).toLocaleDateString()}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default HighScores;
