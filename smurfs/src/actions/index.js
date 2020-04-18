import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_ERROR = "DATA_ERROR";

export const fetchData = () => {
  const request = axios.get('http://localhost:3333/smurfs')
  return dispatch => {
    dispatch({ type: FETCH_DATA});
    request.then(res => {
      dispatch({ type: DATA_SUCCESS, payload: res.data})
    }).catch(err => dispatch({DATA_ERROR, payload: err}))
  }
};

export const postData = () => {
  const post = axios.post('http://localhost:3333/smurfs')
  return dispatch => {
    dispatch({ type: FETCH_DATA})
    post.then(res => {
      dispatch({ type: DATA_SUCCESS, payload: res.data})
    }).catch(err => dispatch({ type: DATA_ERROR, payload: err}))
  }
}


