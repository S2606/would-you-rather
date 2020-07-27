export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER'

/**
 * Action for receiving users from a source
 * @param {JSON} users 
 */
export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

/**
 * Action for adding answer to user instance
 * @param {string} authedUser Authenticated User
 * @param {string} qid Question Id for which answer is given
 * @param {string} answer answer of the question
 */
export function addUserAnswer ({ authedUser, qid, answer }) {
    return {
        type: ADD_USER_ANSWER,
        authedUser, 
        qid, 
        answer
    }
}