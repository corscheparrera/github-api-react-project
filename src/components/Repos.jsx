import React, { Component } from 'react'
import GithubRepos from './GithubRepos'


class Repos extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    var url = `https://api.github.com/users/${this.props.username}/repos`
    window.fetch(url)
      .then(response => response.json())
      .then(repos => {
        this.setState({ repos: repos })
      }
      )
  }



  renderRepos = (person) => {
    return (<GithubRepos repos={person} key={person.id} />)
  }



  render() {
    if (!this.state.repos) {
      return <div>LOADING FOLLOWERS...</div>
    }
    return (
      <div className='repos-page'>
        <h2>Repos of {this.props.username}</h2>
        <ul>
          {this.state.repos.map((p) => this.renderRepos(p))}
        </ul>
      </div>
    )
  }
}

export default Repos
