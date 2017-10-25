import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Githubuser extends Component {
  render () {
    return (
      <div className='box'>
        <div className='user-info'>
          <Link to={`/user/${this.props.user.login}`}>
            <img className='user-info__avatar' src={this.props.user.avatar_url} />
            <h2 className='user-info__title'>{this.props.user.login}</h2>
          </Link>

        </div>
      </div>

    )
  }
}

export default Githubuser
