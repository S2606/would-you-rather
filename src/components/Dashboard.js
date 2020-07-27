import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import QuestionListItem from './QuestionListItem'

/**
 * Component for rendering questions list for a user for both cases
 * (answered and unanswered)
 */
const Dashboard = props => {
    const { answeredQuestions, unAnsweredQuestions } = props;

    return (
    <div>
        <div style={{float: 'left', width: '50%'}}>
            <h1>Answered Question</h1>
            <ul className="questions-list">
                {answeredQuestions.map((question) => (
                    <li key={question.id}>
                        <Link to={`question/${question['id']}`}>
                            <QuestionListItem id={question.id}/>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        <div style={{float: 'right', width: '50%'}}>
            <h1>Unanswered Question</h1>
            <ul className="questions-list">
                {unAnsweredQuestions.map((question) => (
                    <li key={question.id}>
                        <Link to={`question/${question['id']}`}>
                            <QuestionListItem id={question.id}/>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    );
}

function mapStateToProps ({questions, authedUser}) {
    //Fetch a list of answered Question
    const answeredQuestions = Object.values(questions).filter(question => question.optionOne.votes.includes(authedUser) 
    || question.optionTwo.votes.includes(authedUser)).sort((a, b) => b.timestamp - a.timestamp)

    //Fetch a list of unAnswered Question
    const unAnsweredQuestions = Object.values(questions).filter(question => !question.optionOne.votes.includes(authedUser) 
    &&!question.optionTwo.votes.includes(authedUser)).sort((a, b) => b.timestamp - a.timestamp)
  
    return {
        answeredQuestions,
        unAnsweredQuestions,
        authedUser
    }
}

export default connect(mapStateToProps)(Dashboard);