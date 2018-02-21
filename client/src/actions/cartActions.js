export const addToCart = book => {
  return {
    type: 'ADD_TO_CART',
    payload: book,
  };
};

export const updateToCart = (id, unit) => {
  return {
    type: 'UPDATE_CART',
    payload: {
      id, unit,
    },
  };
};

export const deleteFromCart = id => {
  return {
    type: 'DELETE_CART',
    payload: {
      id,
    },
  };
};

