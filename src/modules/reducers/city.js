import {
  UPDATE_CITY
} from '../constants/city';

const initialState = {
  cities: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CITY:
      return {
        ...state,
        cities: action.payload.data
      }
    default:
      return state
  }
}