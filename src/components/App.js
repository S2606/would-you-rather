import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login';
import Dashboard from './Dashboard';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import AnswerQuestion from './AnswerQuestion';
import AuthedRouter from './AuthedRouter';
import LoadingBar from 'react-redux-loading-bar';
import NavBar from './NavBar';
import NotFoundError from './NotFoundError';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <div className='App'>
            <LoadingBar />
            <NavBar/>
            <div className="main-content"> 
                  <Switch>
                    <Route path="/" exact component={Login}/>
                    <Route path="/not-found" component={NotFoundError} />
                    <AuthedRouter path='/dashboard' exact component={Dashboard} />
                    <AuthedRouter path='/add' exact component={NewQuestion} />
                    <AuthedRouter path='/question/:id' component={AnswerQuestion} />
                    <AuthedRouter path='/leaderboard' component={Leaderboard} />
                  </Switch>
                </div>
            </div>
        </Fragment>
      </BrowserRouter>
    ); 
  }
}

export default connect()(App);
