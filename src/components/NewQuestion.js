import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions';

/**
 * Component for rendering new question form
 */
class NewQuestion extends Component{

    state = {      
    	optionOneText:'',
		optionTwoText:'',
		toDashboard: false,
    };
    
    handleInputChange = (event, type) => {
		const value = event.target.value;

		this.setState((state) => {
			return type === 'option1' ? {...state, optionOneText: value} : {...state, optionTwoText: value}
		});
	}

    handleSubmit = (event) => {   
    	event.preventDefault();

    	const { dispatch } = this.props
    	const { optionOneText, optionTwoText} = this.state   
    
    	dispatch(handleAddQuestion(
      		optionOneText,
      		optionTwoText
    	))

    	this.setState({
        	optionOneText:'',
			optionTwoText:'',
			toDashboard: true,
      	})
  	}

    render(){

		const { toDashboard } = this.state;
		const { from } = this.props.location.state || { from: { pathname: '/dashboard'}}
		if(toDashboard) {
			return <Redirect to={from} />
		}

        return (
            <div className="tile-item new-question">
                <div className="tile-header">Create New Question</div>
                <form onSubmit={this.handleSubmit}>
					<div className="would-you">Would you rather...</div>
					<input 
						name="optionOneText"
						type="text"
						placeholder="Enter Option One Text Here"
						value={this.state.optionOneText}
						onChange={(event) => this.handleInputChange(event, 'option1')} />
					<div className="or">Or</div>
					<input 
						name="optionTwoText"
						type="text"
						placeholder="Enter Option Two Text Here"
						value={this.state.optionTwoText}
						onChange={(event) => this.handleInputChange(event, 'option2')} />

					<button type="submit">Submit</button>
				</form>
            </div>
        );
    }
}

export default connect()(NewQuestion);