import { act, renderHook } from '@testing-library/react-hooks';
import { useBookmarks } from '../../hooks/useBookmarks';

describe('useBookmarks', () => {
  it('should add new bookmark', () => {
    const { result } = renderHook(() => useBookmarks());
    act(() => {
      result.current.addBookmark({
        label: '12',
        params: {
          page: 1,
          earth_date: '2022-05-29',
          camera: 'all',
        },
        roverType: 'curiosity',
      });
    });

    expect(result.current.bookmarks).toEqual([
      {
        label: '12',
        params: {
          page: 1,
          earth_date: '2022-05-29',
          camera: 'all',
        },
        roverType: 'curiosity',
      },
    ]);
  });

  it('should delete bookmark', () => {
    const { result } = renderHook(() => useBookmarks());
    act(() => {
      result.current.addBookmark({
        label: '12',
        params: {
          page: 1,
          earth_date: '2022-05-29',
          camera: 'all',
        },
        roverType: 'curiosity',
      });
    });

    act(() => {
      result.current.addBookmark({
        label: '20',
        params: {
          page: 1,
          earth_date: '2022-05-29',
          camera: 'all',
        },
        roverType: 'curiosity',
      });
    });

    act(() => {
      result.current.deleteBookMark({
        label: '12',
        params: {
          page: 1,
          earth_date: '2022-05-29',
          camera: 'all',
        },
        roverType: 'curiosity',
      });
    });

    expect(result.current.bookmarks).toEqual([
      {
        label: '20',
        params: {
          page: 1,
          earth_date: '2022-05-29',
          camera: 'all',
        },
        roverType: 'curiosity',
      },
    ]);
  });
});
