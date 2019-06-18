import './styles'
import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Login from './routes/login'
import Home from './routes/home'
class App extends React.Component {
  log=() => {
    console.log(999)
  }
  render () {
    return (
      <React.Fragment>
        <HashRouter>
          <Switch>
            <Route path='/login' component={Login} />
            <Route exact path='/' component={Home} />
          </Switch>
        </HashRouter>
      </React.Fragment>
    )
  }
}
export default App
