import React, { Component } from 'react';

/**
 * Component for rendering
 * 404 Error Page
 */
class NotFoundError extends Component {
  render() {
    return (
      <div>
        <img alt="avatar" src='404NotFound.png'/>
        <h3 className='center'>404 / Not Found</h3>
      </div>
    );
  }
}

export default NotFoundError