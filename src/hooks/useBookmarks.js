import { useEffect, useState } from 'react';

export const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);

  const addBookmark = (newBookmark) => {
    const bookmarkUnique = bookmarks.filter((bookmark) => newBookmark.label !== bookmark.label);

    localStorage.setItem('bookmarks', JSON.stringify([...bookmarkUnique, newBookmark]));
    refreshBookmarks();
  };

  const deleteBookMark = (deleteBookmark) => {
    const newBookmarks = bookmarks.filter((bookmark) => bookmark.label !== deleteBookmark.label);

    localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
    refreshBookmarks();
  };

  const refreshBookmarks = () => {
    setBookmarks(JSON.parse(localStorage.getItem('bookmarks') || []));
  };

  useEffect(() => {
    setBookmarks(JSON.parse(localStorage.getItem('bookmarks')) || []);
  }, []);

  return {
    bookmarks,
    addBookmark,
    deleteBookMark,
    refreshBookmarks,
  };
};
