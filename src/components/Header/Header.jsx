import { useState } from 'react';
import { useBookmarks } from '../../hooks/useBookmarks';
import trashIcon from '../../assets/trash.svg';

import { ROVER_CAMAERA_OPTIONS, ROVER_TYPES_OPTIONS } from '../../utils/constants';

import { Select } from '../Select';

import styles from './Header.module.css';

const Header = ({ params, roverType, setRoverType, setParams, reFetch }) => {
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [nameBookMark, setNameBookMark] = useState('');

  const { bookmarks, addBookmark, deleteBookMark } = useBookmarks();
  const disabledBookmark = !(params.earth_date || params.sol);

  const handleOnChangeRover = (value) => {
    setRoverType(value);
  };

  const handleOnChangeCamera = (value) => {
    setParams({ ...params, camera: value });
  };

  const handleFilterOnChange = ({ target: { checked, name } }) => {
    setParams({ ...params, [name]: checked });
  };

  const handleOnClick = () => {
    reFetch(params);
  };

  const handleToggleBookmarks = () => {
    setShowBookmarks(!showBookmarks);
  };

  const handleNameOnChange = ({ target: { value } }) => {
    setNameBookMark(value);
  };

  const handleSaveBookmark = () => {
    addBookmark({ label: nameBookMark, params, roverType });
    setNameBookMark('');
  };

  const handleSelectBookmark = (bookmark) => {
    setRoverType(bookmark.roverType);
    setParams(bookmark.params);
  };
  const handleDeleteBookmark = (bookmark) => {
    deleteBookMark(bookmark);
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerFilterContainer}>
        <div className={styles.headerFilter}>
          <Select onChange={handleOnChangeRover} defaultValue={roverType} options={ROVER_TYPES_OPTIONS} />
          <Select
            onChange={handleOnChangeCamera}
            defaultValue={params.camera}
            options={ROVER_CAMAERA_OPTIONS[roverType]}
          />
        </div>
        <div className={styles.headerFilter}>
          <div>
            <input
              checked={Boolean(params.earth_date)}
              type="checkbox"
              name="earth_date"
              onChange={handleFilterOnChange}
            />
            <label>Earth Day (2020-09-22) </label>
          </div>
          <div>
            <input checked={Boolean(params.sol)} name="sol" type="checkbox" onChange={handleFilterOnChange} />
            <label>Sol (2890) </label>
          </div>
        </div>
        <div className={styles.headerFilter}>
          <input value={nameBookMark} onChange={handleNameOnChange} placeholder="Name bookmark" />
          <button onClick={handleSaveBookmark} disabled={!nameBookMark || disabledBookmark}>
            Add bookmark
          </button>
        </div>
        <div className={styles.headerSearch}>
          <button onClick={handleOnClick}>Search</button>
          <div className={styles.headerBookmark}>
            <button onClick={handleToggleBookmarks}>{showBookmarks ? 'Hide ' : 'Show '}bookmarks</button>
          </div>
        </div>
      </div>
      <div>
        {showBookmarks && (
          <div className={styles.headerBookmarkContainer}>
            {bookmarks.map((bookmark, index) => (
              <div key={index} className={styles.checkbox}>
                <input
                  type="radio"
                  onChange={() => handleSelectBookmark(bookmark)}
                  value={bookmark.label}
                  name="bookmark"
                />
                {bookmark.label}
                <img
                  width={17}
                  className={styles.trashIcon}
                  src={trashIcon}
                  onClick={() => handleDeleteBookmark(bookmark)}
                />
              </div>
            ))}
            {!bookmarks.length && <span>No bookmarks added</span>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
