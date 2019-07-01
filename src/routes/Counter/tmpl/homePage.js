import React from 'react'
import { Button } from 'antd'
class App extends React.Component {
  log = () => {
    console.log('不要点我')
  }
  render () {
    return (
      <React.Fragment>
        你是我一生最爱的人
        <div>
          <Button>点我</Button>
          <Button>点我</Button>
        </div>
      </React.Fragment>
    )
  }
}

export default App
