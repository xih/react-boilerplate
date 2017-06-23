/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CHANGE_USERNAME,
  LOAD_CAROUSELS,
  LOAD_CAROUSELS_SUCCESS,
  LOAD_CAROUSELS_ERROR
} from './constants'

/**
 * Load the carousel, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_CAROUSELS
 */
export function loadCarousels() {
  console.log('break')
  return {
    type: LOAD_CAROUSELS,
  };
}

/**
 * Dispatched when the carousels are loaded by the request saga
 *
 * @param  {array} carousel The carousel data
 *
 * @return {object}      An action object with a type of LOAD_CAROUSELS_SUCCESS passing the repos
 */
export function carouselsLoaded(carousel) {
  // console.log('load carousels')
  // console.log(carousel)
  // console.log("i got the data")
  return {
    type: LOAD_CAROUSELS_SUCCESS,
    carousel,
  }
}

/**
 * Dispatched when loading the carousels fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_CAROUSELS_ERROR passing the error
 */
 export function carouselLoadingError(error) {
   console.log('carousels_error')
   return {
     type: LOAD_CAROUSELS_ERROR,
     error
   }
 }

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function changeUsername(name) {
  return {
    type: CHANGE_USERNAME,
    name,
  };
}
