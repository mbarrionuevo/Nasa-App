import { Breathing, Image } from 'react-shimmer';

import noFound from '../../assets/no-found.png';

import styles from './Empty.module.css';

const Empty = ({ hasError }) => {
  const title = hasError ? 'Internal Server Error' : 'No results found';
  const description = hasError
    ? 'There was an error. Please try again later.'
    : 'We could not find what you are looking for. Please try again with different parameters.';

  return (
    <div className={styles.emptyContainer}>
      <Image src={noFound} fallback={<Breathing width={331} height={348} />} />
      <h3 className={styles.emptyTitle}>{title}</h3>
      <span className={styles.emptyDescription}>{description}</span>
    </div>
  );
};

export default Empty;
