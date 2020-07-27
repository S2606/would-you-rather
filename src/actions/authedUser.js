export const SET_AUTHED_USER  = 'SET_AUTHED_USER'
export const CLEAR_AUTHED_USER  = 'CLEAR_AUTHED_USER'

/**
 * Action for setting up authed user
 * @param {string} id 
 */
export function setAuthedUser (id) {
    return {
        type: SET_AUTHED_USER,
        id
    }
}

/**
 * Action for clearing up settled auth user
 */
export function clearAuthedUser() {
    return {
      type: CLEAR_AUTHED_USER,
    };
}