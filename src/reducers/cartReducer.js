export const cartReducer = (state, action) => {
  switch (action.type) {

    case "ADD":
      return state.concat({ ...action.payload });

    case "REMOVE":
      return state.filter(product => product.id !== action.payload.id);

    default:
      return state;
  }
};
