import PropTypes from 'prop-types';
import styles from '../style/PopUp.module.css';

function PopUp({ characterName, found }) {
  return (
    <div
      className={styles.popUp}
      style={{ backgroundColor: found ? '#006600' : '#B30000' }}
    >
      <p>
        {found
          ? `You found ${characterName}`
          : `${characterName} is somewhere else`}
      </p>
    </div>
  );
}

PopUp.propTypes = {
  characterName: PropTypes.string,
  found: PropTypes.bool,
};

export default PopUp;
