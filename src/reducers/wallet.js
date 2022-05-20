import {
  FETCH_CURRENCIES,
  ADD_EXPENSES,
  UPDATE_EXPENSES,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalExpenses: 0,
};

const wallet = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case FETCH_CURRENCIES:
    return {
      ...state,
      currencies: payload.data,
      rates: payload.rates,
    };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, payload],
    };
  case UPDATE_EXPENSES:
    return {
      ...state,
      totalExpenses: payload,
    };
  default: return state;
  }
};

export default wallet;
