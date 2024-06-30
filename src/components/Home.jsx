import { Link } from 'react-router-dom';
import convention from '../img/convention.webp';
import cyberpunkCity from '../img/cyberpunk-city.webp'
import undergroundLab from '../img/underground-lab.webp';

function Home() {
  return (
    <>
      <h1>Choose your illustration</h1>
      <div>
        <div>
          <h3>Convention</h3>
          <Link to='/convention'>
            <img src={convention} alt='' />
          </Link>
        </div>
        <div>
          <h3>Cyberpunk City</h3>
          <Link to='/cyberpunk-city'>
            <img src={cyberpunkCity} alt='' />
          </Link>
        </div>
        <div>
          <h3>Underground Lab</h3>
          <Link to='/underground-lab'>
            <img src={undergroundLab} alt='' />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
