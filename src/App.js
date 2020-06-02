import './styles'
import React, { Suspense, lazy } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import Loadable from 'components/loadable'
import store from 'store'
import { Provider } from 'mobx-react'
import Home from 'pages/home'
import PageLayout from 'layout'
import Base from 'routes'
import zhCN from 'antd/es/locale-provider/zh_CN'
import ErrorBoundary from 'components/error-boundary'
const Login = lazy(() => import('pages/login/index'))
const NotFound = lazy(() => import('components/404'))
class App extends React.PureComponent {
  render () {
    return (
      <ErrorBoundary>
        <Provider {...store}>
          <ConfigProvider locale={zhCN}>
            <BrowserRouter>
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
            </BrowserRouter>
          </ConfigProvider>
        </Provider>
      </ErrorBoundary>
    )
  }
}
export default App
