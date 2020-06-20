export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";

export const requestPosts = () => {
  return {
    type: REQUEST_POSTS,
  };
};

export const receivePosts = (json) => {
  return {
    type: RECEIVE_POSTS,
    posts: json,
  };
};

const fetchPosts = () => {
  return (dispatch) => {
    dispatch(requestPosts());
    return fetch("posts/")
      .then((response) => response.json())
      .then((json) => dispatch(receivePosts(json)));
  };
};

const shouldFetchPosts = (state) => {
  const posts = state.posts;
  if (posts.length == 0) {
    return true;
  } else if (state.isFetching) {
    return false;
  }
};

export const fetchPostsIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
      return dispatch(fetchPosts());
    }
  };
};
