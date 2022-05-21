export const ADD_EXPENSES = 'ADD_EXPENSES';

export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';

export const REMOVE_EXPENSES = 'REMOVE_EXPENSES';

export const SET_EMAIL = 'SET_EMAIL';

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

export const removeExpenses = (newExpensesList) => ({
  type: REMOVE_EXPENSES,
  payload: newExpensesList,
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
