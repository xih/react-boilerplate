/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_REPOS } from 'containers/App/constants'
import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';

import { LOAD_CAROUSEL } from 'containers/HomePage/constants'
import { carouselsLoaded, carouselLoadingError } from './actions'

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

//Data is an array of carousel objects
const findLatestCarousel = (data) => {
  const dates = data.map(carousel => new Date(carousel.modified))
  const newest_date = new Date(Math.max.apply(null, dates))
  const newest = data.filter(c => new Date(c.modified).valueOf() === newest_date.valueOf())
  const carousel_obj = newest[0]
  return carousel_obj
}

export function* getCarousels() {
  const requestURL = `https://dennisxing.com/index.php/wp-json/wp/v2/carousel`

  try {
    const carousels = yield call(request, requestURL)
    const latestCarousel = findLatestCarousel(carousels)
    yield put(carouselsLoaded(latestCarousel))
  } catch (err) {
    yield put(carouselLoadingError(err))
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* carouselData() {
  const watcher = yield takeLatest(LOAD_CAROUSEL, getCarousels)

  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

/**
 * Root saga manages watcher lifecycle
 */
export function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_REPOS, getRepos)

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  githubData,
  carouselData
];
