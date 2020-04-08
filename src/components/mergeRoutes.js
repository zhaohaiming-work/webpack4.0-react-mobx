import React, { lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
const NotFound = lazy(() => import('components/404'))

const mergeRoutes = routeArr => routeArr.map((v, i) => {
  if (v.children && (v.children instanceof Array)) {
    return <Route key={i} path={v.path} component={({ match }) => {
      const tmplArr = v.children.map((val, index) => {
        if (val.children && (val.children instanceof Array)) {
          mergeRoutes(val.children)
        } else {
          return <Route key={index} exact path={match.url + val.path} component={val.tmpl} />
        }
      })
      return (
        <Switch>
          <Route exact path={match.url} component={v.tmpl} />
          {tmplArr}
          <Route component={NotFound} />
        </Switch>
      )
    }} />
  } else {
    return <Route key={i} exact path={v.path} component={v.tmpl} />
  }
})

export default mergeRoutes
