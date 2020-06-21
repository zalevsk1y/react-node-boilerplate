import { json } from "body-parser";

export const REQUEST_TRANSACTIONS = "REQUEST_TRANSACTIONS";
export const RECEIVE_TRANSACTIONS = "RECEIVE_TRANSACTIONS";
export const RECEIVE_BALANCE = "RECEIVE_BALANCE";

export const requestTransactions = () => {
  return {
    type: REQUEST_TRANSACTIONS,
  };
};

export const receiveTransactions = (json) => {
  return {
    type: RECEIVE_TRANSACTIONS,
    transactions: json,
  };
};
export const receiveBalance = (json) => {
  return {
    type: RECEIVE_BALANCE,
    balance: json,
  };
};
export const fetchTransactions = (dispatch) => {
  return (dispatch) => {
    dispatch(requestTransactions());
    return fetch("/account/transactions",{method:"GET"})
      .then((response) => response.json())
      .then((json) => dispatch(receiveTransactions(json)));
  };
};
export const fetchBalance = (dispatch) => {
  return (dispatch) => {
    dispatch(requestTransactions());
    return fetch("/account/",{method:"GET"})
      .then((response) => response.json())
      .then((json) => dispatch(receiveBalance(json)));
  };
};
export const makeTransaction = (dispatch, id, type, amount) => {
  return (dispatch) => {
    dispatch(requestTransactions());
    const params = {
      method: "POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({
        id,
        amount,
        type,
      }),
    };
    return fetch("/account/transactions",params)
      .then((response) => response.json())
      .then((json) => {
        dispatch(receiveTransactions(json));
         dispatch(fetchTransactions(dispatch));
         dispatch(fetchBalance(dispatch));

      });
  };
};
