import mergeRoute from 'components/merge-routes'
import {
  ExampleTest,
  ExampleHome,
  Jinzhi,
  Xiaozhu
} from 'pages/example'

export default mergeRoute([
  {
    path: '/example',
    tmpl: ExampleHome,
    children: [
      {
        path: '/test',
        tmpl: ExampleTest,
        children: [
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
