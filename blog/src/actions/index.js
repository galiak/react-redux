 /* eslint-disable no-unused-vars */
/* eslint-enable no-unused-vars */

import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // manually dispatching the result of calling the action creator which is a function
  // and redux-thunk is going to automatically dispatch that inner function 
  // (that does the api request and in it's turn dispatches the response)
  await dispatch(fetchPosts()); 

  // const userIds = _.uniq(_.map(getState().posts, 'userId'));
  // userIds.forEach(id => dispatch(fetchUser(id)));
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value(); // lodash won't execute the cahin without value()
};

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({type: 'FETCH_POSTS', payload: response.data});
};

// function() {
//   return function() {

//   }
// }

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({type: 'FETCH_USER', payload: response.data});
};

// memoized version
// a function that returns a function (dispatch) that calls a function (_fetchUser)
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

// private function
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({type: 'FETCH_USER', payload: response.data});
// });

// export const fetchUser = function(id) {   
//   return async function(dispatch) {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({type: 'FETCH_USER', payload: response.data});
//   };
// };

// normal action creator
export const selectPost = () => {
  return {
    type: 'SELECT_POST'
  }
};