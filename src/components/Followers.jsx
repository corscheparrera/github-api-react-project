import React, { Component } from 'react'
import GithubUser from './GithubUser'


class Followers extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    var url = `https://api.github.com/users/${this.props.username}/followers`
    window.fetch(url)
      .then(response => response.json())
      .then(followers => {
        this.setState({ followers: followers })
      }
      )
  }



  renderFollower = (person) => {
    return (<GithubUser user={person} key={person.login} />)
  }



  render() {
    if (!this.state.followers) {
      return <div>LOADING FOLLOWERS...</div>
    }
    return (
      <div className='followers-page'>
        <h2>Followers of {this.props.username}</h2>
        <ul>
          {this.state.followers.map((p) => this.renderFollower(p))}
        </ul>
      </div>
    )
  }
}

export default Followers
