/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable'
import { combineReducers } from 'redux-immutable'

import {
  CHANGE_USERNAME,
  LOAD_CAROUSELS,
  LOAD_CAROUSELS_SUCCESS,
  LOAD_CAROUSELS_ERROR
} from './constants';

// The initial state of the App
const initialState = fromJS({
  username: '',
})

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:

      // Delete prefixed '@' from the github username
      return state
        .set('username', action.name.replace(/@/gi, ''));
    default:
      return state;
  }
}

const carouselInitialState = fromJS({
  carouselLoading: false,
  carouselError: false,
  carouselData: {
    data: false
  }
})

export function carouselReducer(state = carouselInitialState, action) {
  switch (action.type) {
    case LOAD_CAROUSELS:
      return state
        .set('carouselLoading', true)
        .set('carouselError', false)
        .setIn(['carouselData', 'data'], false)
    case LOAD_CAROUSELS_SUCCESS:
      console.log('something happened')
      return state
        .set('carouselLoading', false)
        .set('carouselError', false)
        .setIn(['carouselData', 'data'], action.carousel)
    case LOAD_CAROUSELS_ERROR:
      return state
        .set('carouselLoading', false)
        .set('carouselError', action.error)
    default:
      return state
  }
}
//
const homePageReducer = combineReducers({
  carousel: carouselReducer,
  home: homeReducer
})

export default homePageReducer
