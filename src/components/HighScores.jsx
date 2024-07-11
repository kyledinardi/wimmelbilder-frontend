import { useState, useEffect } from 'react';
import conventionHalf from '../img/convention-half.webp';
import cyberpunkCityHalf from '../img/cyberpunk-city-half.webp';
import undergroundLabHalf from '../img/underground-lab-half.webp';
import styles from '../style/HighScores.module.css';

function HighScores() {
  const [highScores, setHighScores] = useState(null);
  const [currentIllustration, setCurrentIllustration] = useState('convention');

  useEffect(() => {
    fetch('http://localhost:3000/high-scores', { mode: 'cors' })
      .then((response) => response.json())
      .then((response) => {
        const newHighScores = {};
        const { scoreList } = response;

        scoreList.forEach((highScore) => {
          if (!newHighScores[highScore.illustration]) {
            newHighScores[highScore.illustration] = [highScore];
          } else {
            newHighScores[highScore.illustration].push(highScore);
          }
        });

        setHighScores(newHighScores);
      });
  }, []);

  function unCamelCaseName(illustrationName) {
    switch (illustrationName) {
      case 'convention':
        return 'Convention';
      case 'cyberpunkCity':
        return 'Cyberpunk City';
      case 'undergroundLab':
        return 'Underground Lab';
      default:
        return null;
    }
  }

  function unEscape(name) {
    const doc = new DOMParser().parseFromString(name, 'text/html');
    return doc.documentElement.textContent;
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
          <h2>{unCamelCaseName(currentIllustration)}</h2>
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
              {highScores[currentIllustration].map((highScore, index) => (
                <tr key={highScore._id}>
                  <th scope='row'>{index + 1}</th>
                  <td>{unEscape(highScore.name)}</td>
                  <td>{highScore.score}</td>
                  <td>{new Date(highScore.date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default HighScores;
