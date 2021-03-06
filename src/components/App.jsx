import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Search from './Search'
import User from './User'

/*
This function is used to render the user route. Unfortunately, it always
renders the same user. You need to fix this.
*/
const renderUser = (info) => {
  return (<User username={info.match.params.username} />)
}

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div >
          <header className='main-header' />
          <main className='main-content'>
            <Route exact path='/' render={() => <Search />} />
            <Route path='/user/:username' render={renderUser} />
          </main>
        </div>
      </BrowserRouter>
    )
  }
};

export default App
