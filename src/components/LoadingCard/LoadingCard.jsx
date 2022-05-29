import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingCard = () =>
  Array(25)
    .fill('dummy')
    .map((_, index) => <Skeleton key={index} width={290} height={370}></Skeleton>);

export default LoadingCard;
