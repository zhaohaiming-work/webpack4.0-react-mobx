import React from 'react'
import { Route } from 'react-router-dom'
const mergeRoutes = (routeArr) => {
  const storeArr = []
  const cycleFun = data => {
    data.forEach(v => {
      if (v.children) {
        const { path, tmpl } = v
        storeArr.push({ path, tmpl })
        cycleFun(v.children.map(val => {
          val.path = v.path + val.path
          return val
        }))
      } else {
        storeArr.push(v)
      }
    })
  }
  cycleFun(routeArr)
  return storeArr.map((v, i) => <Route key={i} exact path={v.path} component={v.tmpl} />)
}

export default mergeRoutes
