export const SET_EMAIL = 'SET_EMAIL';

export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';

export const fetchCurrencies = (data) => ({
  type: FETCH_CURRENCIES,
  payload: data,
});

export const setUserEmail = (userEmail) => ({
  type: SET_EMAIL,
  payload: userEmail,
});
