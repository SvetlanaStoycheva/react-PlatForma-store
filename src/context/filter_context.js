import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/filter_reducer';
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions';
import { useProductsContext } from './products_context';

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: 'choose-criteria',
  filters: {
    text: '',
    occasion: 'all',
    category: 'all',
    color: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    linen: '',
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  //at first products is an empty array. That's why we set up
  //useEffect that we will invoke when products array is changing
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const updateSort = (e) => {
    // const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS });
    dispatch({ type: FILTER_PRODUCTS });
  }, [products, state.sort, state.filters]);

  const updateFilters = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === 'color') {
      value = e.target.dataset.color;
    }
    if (name === 'price') {
      value = Number(value);
    }
    dispatch({ type: UPDATE_FILTERS, payload: [name, value] });
  };
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
