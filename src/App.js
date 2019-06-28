import './styles'
import React, { Suspense, lazy } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Loadable from 'components/loadable'
import FastClick from 'fastclick'
import store from 'store'
import { Provider } from 'mobx-react'
import Home from 'pages/Home'
import PageLayout from 'layout'
import Base from './routes'
const Login = lazy(() => import('./routes/Login/index'))
class App extends React.Component {
  componentDidMount () {
    // 初始化快速点击
    if ('addEventListener' in document) {
      document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body)
      }, false)
    }
  }
  render () {
    return (
      <React.Fragment>
        <Provider {...store}>
          <HashRouter>
            <Suspense fallback={Loadable}>
              <Switch>
                <Route path='/login' component={Login} />
                <Route path='/' component={({ match }) => (
                  <PageLayout>
                    <Route exact path={match.url} component={Home} />
                    {Base}
                  </PageLayout>
                )} />
              </Switch>
            </Suspense>
          </HashRouter>
        </Provider>
      </React.Fragment>
    )
  }
}
export default App
