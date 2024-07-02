import { Link, useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
import conventionHalf from '../img/convention-half.webp';
import cyberpunkCityHalf from '../img/cyberpunk-city-half.webp';
import undergroundLabHalf from '../img/underground-lab-half.webp';
import styles from '../style/Home.module.css';

function Home() {
  const [setIsGame, setCharacters] = useOutletContext();

  useEffect(() => {
    setIsGame(false);
    setCharacters(null);
  }, [setIsGame, setCharacters]);

  return (
    <>
      <h1>Choose your illustration</h1>
      <div className={styles.games}>
        <div>
          <h3>Convention</h3>
          <Link to='/convention'>
            <img className={styles.illustration} src={conventionHalf} alt='' />
          </Link>
        </div>
        <div>
          <h3>Cyberpunk City</h3>
          <Link to='/cyberpunk-city'>
            <img className={styles.illustration} src={cyberpunkCityHalf} alt='' />
          </Link>
        </div>
        <div>
          <h3>Underground Lab</h3>
          <Link to='/underground-lab'>
            <img className={styles.illustration} src={undergroundLabHalf} alt='' />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
