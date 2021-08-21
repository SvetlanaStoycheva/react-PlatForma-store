import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions';

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
    let tempItem = state.cart.find((item) => item.id === id + color);
    if (tempItem) {
      state.cart.map((item) => {
        if (item === tempItem) {
          tempItem.amount += 1;
          if (tempItem.amount > tempItem.max) {
            tempItem.amount = tempItem.max;
          }
        }
      });
      return { ...state };
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === REMOVE_CART_ITEM) {
    const { id } = action.payload;

    const tempCart = state.cart.filter((item) => item.id !== id);
    return { ...state, cart: tempCart };
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const [value, id] = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === 'inc') {
          let newAmount = item.amount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        }
        if (value === 'dec') {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...item, amount: newAmount };
        }
      } else {
        return item;
      }
    });

    return { ...state, cart: tempCart };
  }
  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce(
      (acc, curr) => {
        acc.total_items += curr.amount;
        acc.total_amount += curr.amount * curr.price;
        return acc;
      },
      { total_items: 0, total_amount: 0 }
    );
    return { ...state, total_amount, total_items };
  }
  // return state
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
