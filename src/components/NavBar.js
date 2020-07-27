import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { clearAuthedUser } from '../actions/authedUser'

/**
 * Component for rendering nav bar at the top
 */
class NavBar extends Component{

    handleLogout = function(event) {
		const { dispatch } = this.props;
	
		dispatch(clearAuthedUser());
	}

    render() {
        const { user, authedUser } = this.props
        const avatar = user ? user.avatarURL : 'placeholder.png'
        const name = user ? user.name : ''

        return (
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to='/dashboard' exact activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' exact activeClassName='active'>
                            New Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' exact activeClassName='active'>
                            LeaderBoard
                        </NavLink>
                    </li>
                    {
                        authedUser
                        && <li className="user-info">
                                <div className="nav-user">
                                    <span>Hello {name}</span>
                                    <img
                                    src={avatar}
                                    alt={`Avatar of ${authedUser}`}
                                    className='nav-avatar'
                                    />
                                    <span onClick={(event) => this.handleLogout(event)}>Logout</span>
                                </div>
                        </li>
                    }
                </ul>
            </nav>
        );
    }
}


function mapStateToProps( { authedUser, users}, props) {
    return {
        authedUser,
        users,
        user: users[authedUser]
    }

}
export default connect(mapStateToProps)(NavBar)