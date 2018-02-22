const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, ...action.payload];

    case 'UPDATE_CART':
      const indexToUpdate = state.findIndex(
          (book) => book.id === action.payload.id);
      const newBookToUpdate = {
        ...state[indexToUpdate],
        quantity: state[indexToUpdate].quantity + action.payload.unit,
      };
      return [
        ...state.slice(0, indexToUpdate),
        newBookToUpdate,
        ...state.slice(indexToUpdate + 1),
      ];

    case 'DELETE_CART':
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};

export default cart;