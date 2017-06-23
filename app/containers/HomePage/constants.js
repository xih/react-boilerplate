/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME'
export const RECEIVE_CAROUSEL = 'xingv6/Home/RECEIVE_CAROUSEL'
export const REQUEST_CAROUSEL = 'xingv6/Home/REQUEST_CAROUSEL'
export const INVALIDATE_CAROUSEL = 'xingv6/Home/INVALIDATE_CAROUSEL'
export const LOAD_CAROUSEL = 'xingv6/Home/LOAD_CAROUSEL'


export const LOAD_CAROUSELS = 'xingv6/Home/LOAD_CAROUSEL'
export const LOAD_CAROUSELS_SUCCESS = 'xingv6/Home/LOAD_CAROUSELS_SUCCESS'
export const LOAD_CAROUSELS_ERROR = 'xingv6/Home/LOAD_CAROUSELS_ERROR'
