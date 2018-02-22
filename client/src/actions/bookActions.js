export const postBooks = books => {
  return {
    type: 'POST_BOOKS',
    payload: books,
  };
};

export const updateBook = book => {
  return {
    type: 'UPDATE_BOOK',
    payload: book,
  };
};

export const deleteBook = id => {
  return {
    type: 'DELETE_BOOK',
    payload: {id: parseInt(id, 10)},
  };
};