import React from 'react'
import mergeRoute from 'components/mergeRoutes'
const Home = React.lazy(() => import('./tmpl/homePage'))
const Test = React.lazy(() => import('./tmpl/test'))
const Jinzhi = React.lazy(() => import('./tmpl/jinzhi'))

export default mergeRoute([
  {
    path: '/example',
    tmpl: Home,
    children:[
      {
        path: '/test',
        tmpl: Test,
        children:[
          {
            path: '/jinzhi',
            tmpl: Jinzhi,
          },
          {
            path: '/lalala',
            tmpl: Jinzhi,
          }
        ]
      },
      {
        path: '/xiaozhu',
        tmpl: Jinzhi,
      }
    ]
  },
  {
    path: '/jinzhi',
    tmpl: Jinzhi
  },
])
