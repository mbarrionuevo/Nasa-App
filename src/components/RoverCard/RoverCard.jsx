import { Image, Breathing } from 'react-shimmer';
import PropTypes from 'prop-types';

import styles from './RoverCard.module.css';

const RoverCard = ({ img_src, earth_date, sol, camera, rover }) => (
  <div className={styles.roverCard}>
    <div className={styles.roverCardContainer}>
      <Image
        src={img_src}
        NativeImgProps={{ style: { width: 250, height: 250, borderRadius: '20px' } }}
        fallback={<Breathing width={250} height={250} />}
      />
    </div>
    <span>Name: {camera.name}</span>
    <span>Rover: {rover.name}</span>
    <span>Earth Date: {earth_date}</span>
    <span>Sol: {sol}</span>
  </div>
);

RoverCard.propTypes = {
  img_src: PropTypes.string.isRequired,
  earth_date: PropTypes.string.isRequired,
  sol: PropTypes.number.isRequired,
  camera: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  rover: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default RoverCard;
