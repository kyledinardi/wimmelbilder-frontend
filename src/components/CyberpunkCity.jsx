import Counter from './Counter.jsx';
import cyberpunkCity from '../img/cyberpunk-city.webp';
import batman from '../img/batman.png';
import jabbaTheHutt from '../img/jabba-the-hutt.png';
import tomCat from '../img/tom-cat.png'

function CyberpunkCity() {
  return (
    <>
      <Counter />
      <div>
        <img src={batman} alt='' />
        <p>Batman</p>
        <img src={jabbaTheHutt} alt='' />
        <p>Jabba the Hutt</p>
        <img src={tomCat} alt='' />
        <p>Tom Cat</p>
      </div>
      <img src={cyberpunkCity} alt='Cyberpunk City' />
    </>
  );
}

export default CyberpunkCity;
