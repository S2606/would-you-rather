import {saveQuestion, saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { addUserAnswer } from '../actions/users';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

/**
 * Action for receiving questions from a source
 * @param {JSON} questions 
 */
export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

/**
 * Action for adding a new question
 * @param {string} id  Unique Identifier
 * @param {string} timestamp Time at which this question was created  
 * @param {string} author Who asked this question?  
 * @param {string} optionOne what is option one?  
 * @param {string} optionTwo what is option two?  
 */
function addQuestion({ id, timestamp, author, optionOne, optionTwo }) {
    return {
        type: ADD_QUESTION,
        id,
        timestamp,
        author,
        optionOne,
        optionTwo
    }
}

/**
 * Action for adding answer for a question
 * @param {string} authedUser Authenticated User
 * @param {string} qid Question Id for which answer is given
 * @param {string} answer answer of the question
 */
function addAnswer({ authedUser, qid, answer }) {
    return {
        type: ANSWER_QUESTION,
        authedUser, 
        qid, 
        answer
    }
}

/**
 * Action creator for adding a new question 
 * @param {string} optionOne what is option one?  
 * @param {string} optionTwo what is option two?  
 */
export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        const questionInfo = {
            optionOneText,
            optionTwoText,
            author: authedUser
        }

        dispatch(showLoading())
        return saveQuestion(questionInfo)
            .then((question) => {dispatch(addQuestion(question))})
            .then(() => dispatch(hideLoading()))
            .catch( (error) => {
                alert('There was a problem creating new question. Try Again')
                dispatch(hideLoading())
            })
    }
}

/**
 * Action creator for adding answer for a question
 * @param {JSON} info
 */
export function handleAddAnswer(info) {
    return (dispatch, getState) => {
        dispatch(showLoading())

        return saveQuestionAnswer(info)
            .then(() => dispatch(addAnswer({...info})))
            .then(() => dispatch(addUserAnswer({...info})))
            .then(() => dispatch(hideLoading()))
            .catch( (error) => {
                alert('There was a problem saving question. Try Again');
                dispatch(hideLoading())
            })
    }
}




