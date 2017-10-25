import React, { Component } from 'react'

class GithubRepos extends Component {
  render () {
    return (
      <div className='box'>
        <a href={this.props.repos.html_url}>
          <div className='user-info'>

            <h3 className='user-info__title'>{this.props.repos.full_name}</h3>

            <h3 className='stars'>{this.props.repos.stargazers_count} stars</h3>

          </div>
        </a>
      </div>

    )
  }
}

export default GithubRepos
