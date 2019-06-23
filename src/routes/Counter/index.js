
import React, { lazy } from 'react'
import { Route } from 'react-router-dom'
import propTypes from 'prop-types'
const Home = lazy(() => import('./tmpl/homePage'))
const App = ({ match }) => (
  <React.Fragment>
    <Route exact path={`${match.url}`} component={Home} />
  </React.Fragment>
)
App.propTypes = {
  match: propTypes.object
}
export default App
