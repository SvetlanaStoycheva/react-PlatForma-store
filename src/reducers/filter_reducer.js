import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions';

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    const prices = action.payload.reduce((acc, curr) => {
      acc.push(curr.price);
      acc.sort((a, b) => a - b);
      return acc;
    }, []);

    //it needs to be with spread operator... bc otherwise both all_ and filtered_ point to the same place in the memory in JS. And when we changed the one we will be changing the other too. So we are coping the values, we are not referencing to the same place in the memory.
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: {
        ...state.filters,
        min_price: prices[0],
        max_price: prices[prices.length - 1],
      },
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let newProducts = [...filtered_products];
    if (sort === 'choose-criteria') {
      newProducts = [...state.all_products];
    }
    if (sort === 'price-lowest') {
      newProducts = filtered_products.sort((a, b) => a.price - b.price);
    }
    if (sort === 'price-highest') {
      newProducts = filtered_products.sort((a, b) => b.price - a.price);
    }
    if (sort === 'name-a') {
      newProducts = filtered_products.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }
    if (sort === 'name-z') {
      newProducts = filtered_products.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }
    return { ...state, filtered_products: newProducts };
  }
  if (action.type === UPDATE_FILTERS) {
    const [name, value] = action.payload;
    return {
      ...state,
      filters: { ...state.filters, [name]: value },
    };
  }
  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const {
      text,
      category,
      occasion,
      color,
      price,
      linen,
      max_price,
    } = state.filters;
    let tempProducts = [...all_products];

    if (text) {
      tempProducts = tempProducts.filter((item) =>
        item.name.toLowerCase().startsWith(text)
      );
    }
    if (category !== 'all') {
      tempProducts = tempProducts.filter((item) => item.category === category);
    }
    if (occasion !== 'all') {
      tempProducts = tempProducts.filter((item) => item.occasion === occasion);
    }
    if (color !== 'all') {
      tempProducts = tempProducts.filter((item) => {
        return item.colors.find((c) => c === color);
      });
    }
    if (price > 0 && price < max_price) {
      tempProducts = tempProducts.filter((item) => item.price <= price);
    }
    if (linen === 'true') {
      tempProducts = tempProducts.filter((item) => item.linen === 'true');
    }

    return { ...state, filtered_products: tempProducts };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      // filtered_products: state.all_products,
      filters: {
        ...state.filters,
        text: '',
        occasion: 'all',
        category: 'all',
        color: 'all',
        price: state.filters.max_price,
        linen: '',
      },
    };
  }
  // return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
