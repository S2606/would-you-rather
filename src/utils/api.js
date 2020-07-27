import {
    _getQuestions,
    _getUsers,
    _saveQuestion,
    _saveQuestionAnswer,
    _formatQuestion,
} from './_DATA';

/**
 * Fetch the related data needed to initiate the site
 */
export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users, questions]) => ({
      users,
      questions,
    }))
  }

/**
 * Save the new question details to db
 * @param {JSON} info 
 */
export function saveQuestion(info) {
    return _saveQuestion(info)
}

/**
 * Save answer for a question to db
 * @param {JSON} info 
 */
export function saveQuestionAnswer(info) {
    return _saveQuestionAnswer(info)
}

/**
 * Format questions in a particular way
 * @param {JSON} info 
 */
export 
export function formatQuestion(info) {
    return _formatQuestion(info)
}


