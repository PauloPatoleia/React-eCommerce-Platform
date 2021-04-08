import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

const initialState = { cartItems: [] };

export const cartReducer = (state = initialState, { type, payload }) => {
  const itemToAdd = { ...payload };

  switch (type) {
    case CART_ADD_ITEM:
      const itemExistsInCart = state.cartItems.find(
        (cartItem) => cartItem.product === itemToAdd.product
      );

      if (itemExistsInCart) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) => {
            if (cartItem.product === itemToAdd.product) {
              return itemToAdd;
            } else {
              return cartItem;
            }
          }),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, itemToAdd] };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItem: state.filter(
          (cartItem) => cartItem.product !== itemToAdd.product
        ),
      };
    default:
      return state;
  }
};
