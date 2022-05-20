export const SET_EMAIL = 'SET_EMAIL';

export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';

export const ADD_EXPENSES = 'ADD_EXPENSES';

export const UPDATE_EXPENSES = 'UPDATE_EXPENSES';

export const updateExpenses = (newExpenses) => ({
  type: UPDATE_EXPENSES,
  payload: newExpenses,
});

export const addExpenses = (expenses) => ({
  type: ADD_EXPENSES,
  payload: expenses,
});

export const fetchCurrencies = (data, rates) => ({
  type: FETCH_CURRENCIES,
  payload: {
    data,
    rates,
  },
});

export const setUserEmail = (userEmail) => ({
  type: SET_EMAIL,
  payload: userEmail,
});

export const requestingCurrenciesRates = async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const result = await response.json();
  const currencies = Object.keys(result)
    .filter((currency) => currency !== 'USDT');
  await dispatch(fetchCurrencies(currencies, result));
};
