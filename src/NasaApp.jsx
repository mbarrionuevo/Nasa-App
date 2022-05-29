import { Empty, Footer, Header, LoadingCard, RoverCard } from './components';

import { useFetchRoverPhotos } from './hooks/useFetchRoverPhotos';

import './NasaApp.css';

const NasaApp = () => {
  const { photos, params, roverType, error, loading, reFetch, setParams, setRoverType } = useFetchRoverPhotos({
    initialRoverType: 'curiosity',
    initialParams: { page: 1, camera: 'all' },
  });

  const disabledNextPage = photos.length < 24;

  return (
    <div className="container">
      <div>
        <Header
          params={params}
          roverType={roverType}
          reFetch={reFetch}
          setRoverType={setRoverType}
          setParams={setParams}
        />
      </div>
      <div className="body-container">
        <div className="card-container">
          {loading ? <LoadingCard /> : photos.map((photo) => <RoverCard key={photo.id} {...photo} />)}
        </div>
        {!photos.length && <Empty hasError={error} />}
      </div>
      <div>
        {(photos.length || (!photos.length && params.page !== 1)) && (
          <Footer params={params} disabledNextPage={disabledNextPage} setParams={setParams} reFetch={reFetch} />
        )}
      </div>
    </div>
  );
};

export default NasaApp;
