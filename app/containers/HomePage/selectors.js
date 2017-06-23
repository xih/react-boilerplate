/**
 * Homepage selectors
 */

import { createSelector } from 'reselect'



const selectHome = (state) => (state.get('home'))
const selectCarousel = (state) => state.get('home').get('carousel')

const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => homeState.get('username')
);

const makeCarouselLoading = () => createSelector(
  selectCarousel,
  (carouselState) => carouselState.get('carouselLoading')
)

const makeCarouselError = () => createSelector(
  selectCarousel,
  (carouselState) => carouselState.get('carouselError')
)

const makeCarousels = () => createSelector(
  selectCarousel,
  (carouselState) => carouselState.getIn(['carouselData', 'data'])
)

export {
  selectHome,
  makeSelectUsername,
  makeCarouselLoading,
  makeCarouselError,
  makeCarousels
}
