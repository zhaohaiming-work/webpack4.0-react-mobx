import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

const Home = React.lazy(() => import('./tmpl/homePage'))
const Router = ({ match }) => {
  return (
    <React.Fragment>
      <Route exact path={`${match.url}`} component={Home} />
    </React.Fragment>
  )
}
Router.propTypes = {
  match: PropTypes.object
}
export default Router
