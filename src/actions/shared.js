import { receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { getInitialData } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar'

/**
 * Action Creator for fetching intial data required to start the website
 */
export function handleInitialData(){
    return (dispatch) => {
        dispatch(showLoading())
        getInitialData()
        .then(({ questions, users}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(hideLoading())
        })
    }
}