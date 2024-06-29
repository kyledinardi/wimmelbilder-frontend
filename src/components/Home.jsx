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
          <img src={convention} alt='convention' />
        </div>
        <div>
          <h3>Music Festival</h3>
          <img src={musicFestival} alt='music festival' />
        </div>
        <div>
          <h3>Underground Lab</h3>
          <img src={undergroundLab} alt='underground lab' />
        </div>
      </div>
    </>
  );
}

export default Home;
