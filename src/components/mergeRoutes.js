import React from 'react'
import { Route } from 'react-router-dom'

export default routeArr => routeArr.map((v, i) => {
  return <Route key={i} exact path={v.path} component={v.tmpl} />
})
