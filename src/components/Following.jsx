import React, { Component } from 'react'
import GithubUser from './GithubUser'


class Following extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    var url = `https://api.github.com/users/${this.props.username}/following`
    window.fetch(url)
      .then(response => response.json())
      .then(following => {
        this.setState({ following: following })
      }
      )
  }



  renderFollowing = (person) => {
    return (<GithubUser user={person} key={person.login} />)
  }



  render() {
    if (!this.state.following) {
      return <div>LOADING following...</div>
    }
    return (
      <div className='following-page'>
        <h2>Following of {this.props.username}</h2>
        <ul>
          {this.state.following.map((p) => this.renderFollowing(p))}
        </ul>
      </div>
    )
  }
}

export default Following
