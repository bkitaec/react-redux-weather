import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import city from './city'

export default combineReducers({
  router: routerReducer,
  city
})
