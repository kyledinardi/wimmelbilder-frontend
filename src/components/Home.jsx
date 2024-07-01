import { Link, useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
import convention from '../img/convention.webp';
import cyberpunkCity from '../img/cyberpunk-city.webp';
import undergroundLab from '../img/underground-lab.webp';
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
            <img className={styles.illustration} src={convention} alt='' />
          </Link>
        </div>
        <div>
          <h3>Cyberpunk City</h3>
          <Link to='/cyberpunk-city'>
            <img className={styles.illustration} src={cyberpunkCity} alt='' />
          </Link>
        </div>
        <div>
          <h3>Underground Lab</h3>
          <Link to='/underground-lab'>
            <img className={styles.illustration} src={undergroundLab} alt='' />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
