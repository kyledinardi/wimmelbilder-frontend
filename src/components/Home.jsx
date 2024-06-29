import { Link } from 'react-router-dom';
import convention from '../img/convention.webp';
import musicFestival from '../img/music-festival.webp';
import undergroundLab from '../img/underground-lab.webp';

function Home() {
  return (
    <>
      <h1>Choose your illustration</h1>
      <div>
        <div>
          <h3>Convention</h3>
          <Link to='/convention'>
            <img src={convention} alt='convention' />
          </Link>
        </div>
        <div>
          <h3>Music Festival</h3>
          <Link to='/music-festival'>
            <img src={musicFestival} alt='music festival' />
          </Link>
        </div>
        <div>
          <h3>Underground Lab</h3>
          <Link to='/underground-lab'>
            <img src={undergroundLab} alt='underground lab' />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
