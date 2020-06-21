import { REQUEST_TRANSACTIONS, RECEIVE_TRANSACTIONS, RECEIVE_BALANCE } from "../actions";

function mainReducer(state = { isFetching: false,balance:0, transactions: [] }, action) {
  switch (action.type) {
    case REQUEST_TRANSACTIONS:
      return { ...state, isFetching: true };
    case RECEIVE_TRANSACTIONS:
      return { ...state, isFetching: false, transactions: action.transactions };
    case RECEIVE_BALANCE:
      return {...state,balance:action.balance}
    default:
      return state;
  }
}

export default mainReducer;
