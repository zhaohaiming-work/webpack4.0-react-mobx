import React from 'react'
import mergeRoute from 'components/merge-routes'
const Home = React.lazy(() => import('./tmpl/home-page'))
const Test = React.lazy(() => import('./tmpl/test'))
const Jinzhi = React.lazy(() => import('./tmpl/jinzhi'))
const Xiaozhu = React.lazy(() => import('./tmpl/xiaozhu'))

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
    path: '/xiaozhu',
    tmpl: Xiaozhu
  },
])
