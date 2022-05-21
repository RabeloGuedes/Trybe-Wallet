import {
  FETCH_CURRENCIES,
  ADD_EXPENSES,
  REMOVE_EXPENSES,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalExpenses: 0,
};

const wallet = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, payload],
    };
  case FETCH_CURRENCIES:
    return {
      ...state,
      currencies: payload.data,
      rates: payload.rates,
    };
  case REMOVE_EXPENSES:
    return {
      ...state,
      expenses: payload,
    };
  default: return state;
  }
};

export default wallet;
