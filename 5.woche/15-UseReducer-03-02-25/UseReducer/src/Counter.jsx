// 1. Reducer Fonksiyonu
export const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        basket: [...state.basket, action.product],
        total: state.total + action.product.price
      };
    default:
      return state;
  }
};