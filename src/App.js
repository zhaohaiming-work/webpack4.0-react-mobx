import './styles'
import React, { Suspense, lazy } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import Loadable from 'components/loadable'
import store from 'store'
import { Provider } from 'mobx-react'
import Home from 'pages/Home'
import PageLayout from 'layout'
import Base from './routes'
import zhCN from 'antd/es/locale-provider/zh_CN'
import ErrorBoundary from 'components/errorBoundary'
const Login = lazy(() => import('./routes/Login/index'))
const NotFound = lazy(() => import('components/404'))
class App extends React.PureComponent {
  render () {
    return (
      <ErrorBoundary>
        <Provider {...store}>
          <ConfigProvider locale={zhCN}>
            <HashRouter>
              <Suspense fallback={Loadable}>
                <Switch>
                  <Route exact path='/login' component={Login} />
                  <Route path='/' component={({ match }) => (
                    <PageLayout>
                      <Switch>
                        <Route exact path={match.url} component={Home} />
                        {Base}
                        <Route component={NotFound} />
                      </Switch>
                    </PageLayout>
                  )} />
                </Switch>
              </Suspense>
            </HashRouter>
          </ConfigProvider>
        </Provider>
      </ErrorBoundary>
    )
  }
}
export default App
