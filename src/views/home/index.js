import React from 'react'
import './home.scss'
// import { history } from 'func'
class App extends React.Component {
  log = () => {
    console.log('不要点我')
  }
  render () {
    return (
      <React.Fragment>
        <div>
          你可以用他做任何事情
        </div>
        <button>
          点我
        </button>
      </React.Fragment>
    )
  }
}

export default App
