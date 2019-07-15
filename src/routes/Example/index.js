import React from 'react'
import mergeRoute from 'components/mergeRoutes'
const Home = React.lazy(() => import('./tmpl/homePage'))
const Test = React.lazy(() => import('./tmpl/test'))
export default mergeRoute([
  {
    path: '/example',
    tmpl: Home
  },
  {
    path: '/example/test',
    tmpl: Test
  },
])
