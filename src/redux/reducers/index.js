import { REQUEST_POSTS, RECEIVE_POSTS } from "../actions";

function mainReducer(state = { isFetching: false, posts: [] }, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return { ...state, isFetching: true };
    case RECEIVE_POSTS:
      return { ...state, isFetching: false, posts: action.posts };
    default:
      return state;
  }
}

export default mainReducer;
