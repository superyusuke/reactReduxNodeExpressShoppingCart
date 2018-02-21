const books = (state = [], action) => {
  switch (action.type) {
    case 'POST_BOOKS':
      return [...state, ...action.payload];

    case 'UPDATE_BOOK':
      const indexToUpdate = state.findIndex(
          (book) => book.id === action.payload.id);
      const newBookToUpdate = {...state[indexToUpdate], ...action.payload};
      return [
        ...state.slice(0, indexToUpdate),
        newBookToUpdate,
        ...state.slice(indexToUpdate + 1)];

    case 'DELETE_BOOK':
      const indexToDelete = state.findIndex(
          (book) => book.id === action.payload.id);
      return [
        ...state.slice(0, indexToDelete),
        ...state.slice(indexToDelete + 1)];

    default:
      return state;
  }
};

export default books;