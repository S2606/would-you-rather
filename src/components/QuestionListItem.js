import React from 'react'
import { connect } from 'react-redux'

/**
 * Stateless Component for rendering a particular 
 * question in a list of question in Dashboard
 */
const QuestionListItem = props => {
    const { question, author } = props;
    return (
        <div className="tile-item">
            <div className="tile-header">{author.name} asks</div>
            <div className="tile-body">
                <div style={{float: 'left', width: '50%'}}>
                    <img alt="avatar" className="avatar" src={`/${author.avatarURL}`}/>
                </div>
                
                <div style={{float: 'right', width: '50%'}}>
                    <div className="would-you">Would you rather</div>
                    <div className="question-text">...{question.optionOne.text}...</div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
    const question = questions[id]
    const author = question ? users[question.author] : null
  
    return {
        authedUser,
        question,
        author
    }
}

export default connect(mapStateToProps)(QuestionListItem);