import { act, renderHook } from '@testing-library/react-hooks';
import { getCurrentDate } from '../../helpers/date';
import { useFetchRoverPhotos } from '../../hooks/useFetchRoverPhotos';

describe('useFetchRoverPhotos', () => {
  it('should return opportunity', () => {
    const { result } = renderHook(() =>
      useFetchRoverPhotos({
        initialRoverType: 'opportunity',
        initialParams: { page: 1 },
      })
    );

    expect(result.current.roverType).toBe('opportunity');
  });

  it('should return an error ', () => {
    const { result } = renderHook(() =>
      useFetchRoverPhotos({
        initialRoverType: 'opportunities',
        initialParams: { page: 1, sol: 2890 },
      })
    );

    expect(result.current.error).toEqual("Can't fetch photos");
  });

  it('should change params', () => {
    const { result } = renderHook(() =>
      useFetchRoverPhotos({
        initialRoverType: 'curiosity',
        initialParams: { page: 1, camera: 'RHAZ' },
      })
    );

    act(() => {
      result.current.setParams({
        page: 1,
        sol: true,
        camera: 'all',
      });
    });

    expect(result.current.params).toEqual({ page: 1, sol: true, camera: 'all' });
  });

  it('should search for photos based on current Day', () => {
    const { result } = renderHook(() =>
      useFetchRoverPhotos({
        initialRoverType: 'curiosity',
        initialParams: { page: 1, camera: 'RHAZ' },
      })
    );

    expect(result.current.queryParams.earth_date).toBe(getCurrentDate());
  });

  it('should search for photos based on Earth Day date (2020-09-22)', () => {
    const { result } = renderHook(() =>
      useFetchRoverPhotos({
        initialRoverType: 'curiosity',
        initialParams: { page: 1, earth_date: true, camera: 'RHAZ' },
      })
    );

    expect(result.current.queryParams.earth_date).toBe('2020-09-22');
  });

  it('should search for photos based on the Sol date (2890)', () => {
    const { result } = renderHook(() =>
      useFetchRoverPhotos({
        initialRoverType: 'curiosity',
        initialParams: { page: 1, sol: true, camera: 'RHAZ' },
      })
    );

    expect(result.current.queryParams.sol).toBe(2890);
  });
});
