import {
  ADD_EXPENSES,
  CHANGE_EXPENSES,
  EDIT_MODE_ON,
  EDIT_MODE_OFF,
  FETCH_CURRENCIES,
  REMOVE_EXPENSES,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalExpenses: 0,
  editModeOn: false,
  idToEdit: 0,
  rates: {},
};

const wallet = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, payload],
    };
  case CHANGE_EXPENSES:
    return {
      ...state,
      expenses: payload,
      editModeOn: false,
    };
  case EDIT_MODE_ON:
    return {
      ...state,
      idToEdit: payload,
      editModeOn: true,
    };
  case EDIT_MODE_OFF:
    return {
      ...state,
      editModeOn: false,
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
