import Counter from './Counter.jsx';
import undergroundLab from '../img/underground-lab.webp';
import godzilla from '../img/godzilla.png';
import jasonVoorhees from '../img/jason-voorhees.png';
import r2d2 from '../img/r2d2.png';

function UndergroundLab() {
  return (
    <>
      <Counter />
      <div>
        <img src={godzilla} alt='' />
        <p>Godzilla</p>
        <img src={jasonVoorhees} alt='' />
        <p>Jason Voorhees</p>
        <img src={r2d2} alt='' />
        <p>R2D2</p>
      </div>
      <img src={undergroundLab} alt='Underground Lab' />
    </>
  );
}

export default UndergroundLab;
