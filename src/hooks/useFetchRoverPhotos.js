import { useEffect, useState } from 'react';
import { getCurrentDate } from '../helpers/date';

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

export const useFetchRoverPhotos = ({ initialRoverType, initialParams }) => {
  const [params, setParams] = useState(initialParams);
  const [queryParams, setQueryParams] = useState({});
  const [roverType, setRoverType] = useState(initialRoverType);
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async (params) => {
    setLoading(true);

    const newQueryParams = {
      ...(params.camera && params.camera !== 'all' && { camera: params.camera }),
      ...(params.sol && { sol: 2890 }),
      ...(params.earth_date ? { earth_date: '2020-09-22' } : { earth_date: getCurrentDate() }),
      page: params.page,
    };

    setQueryParams(newQueryParams);

    try {
      const searchParams = new URLSearchParams({ ...newQueryParams, api_key: apiKey });
      const response = await fetch(`${apiUrl}${roverType}/photos?${searchParams.toString()}`);
      const data = await response.json();

      setPhotos(data.photos);
      setError(null);
      setLoading(false);
    } catch (error) {
      setError("Can't fetch photos");
      setPhotos([]);
      setLoading(false);
    }
  };

  const reFetch = (params) => {
    if (params) {
      fetchData(params);
    }
  };

  useEffect(() => {
    fetchData(initialParams);
  }, []);

  return {
    photos,
    params,
    roverType,
    error,
    loading,
    queryParams,
    setParams,
    reFetch,
    setRoverType,
  };
};
