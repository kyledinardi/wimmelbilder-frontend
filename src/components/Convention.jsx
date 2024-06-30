import Counter from './Counter.jsx';
import convention from '../img/convention.webp';
import benson from '../img/benson.png';
import kermitTheFrog from '../img/kermit-the-frog.png';
import waylonSmithers from '../img/waylon-smithers.png';

function Convention() {
  return (
    <>
      <div>
        <Counter />
        <div>
          <img src={benson} alt='' />
          <p>Benson</p>
          <img src={kermitTheFrog} alt='' />
          <p>Kermit the Frog</p>
          <img src={waylonSmithers} alt='' />
          <p>Waylon Smithers</p>
        </div>
      </div>
      <img src={convention} alt='Convention' />
    </>
  );
}

export default Convention;
