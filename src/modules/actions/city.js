import {
  UPDATE_CITY,
} from '../constants/city';

export const updateCity = (cities) => {
  return dispatch => {
    dispatch({
      type: UPDATE_CITY,
      payload: {
        data: cities,
      }
    })  }
}
