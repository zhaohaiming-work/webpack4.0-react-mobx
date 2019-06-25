import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
const EL = document.getElementById('app')
let render = () => {
  ReactDOM.render(
    <App />,
    EL
  )
}

if (__DEV__) {
  if (module.hot) {
    const renderApp = render
    const renderError = (error) => {
      const RedBox = require('redbox-react').default
      ReactDOM.render(<RedBox error={error} />, EL)
    }
    render = () => {
      try {
        renderApp()
      } catch (e) {
        renderError(e)
        console.error(e)
      }
    }
    module.hot.accept([
      './App',
      './mobx'
    ], () => Promise.resolve()
      .then(() => ReactDOM.unmountComponentAtNode(EL))
      .then(render)
    )
  }
}

render()
