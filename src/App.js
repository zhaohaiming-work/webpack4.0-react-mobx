import './styles'
import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Login from 'pages/login'
import Home from 'pages/Home'
import PageLayout from 'layout'
import Base from './routes'
class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <HashRouter>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/' component={({ match }) => (
              <PageLayout>
                <Route exact path={match.url} component={Home} />
                {Base}
              </PageLayout>
            )} />
          </Switch>
        </HashRouter>
      </React.Fragment>
    )
  }
}
export default App
