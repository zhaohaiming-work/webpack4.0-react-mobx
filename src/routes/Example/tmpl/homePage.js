import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import '../style'
@inject('example')
@observer
class App extends React.Component {
  static propTypes = {
    example: PropTypes.object
  }
  componentDidMount () {
    console.log(this.props)
  }
  add=() => {

  }
  render () {
    const { todos, count, add } = this.props.example
    return (
      <div>
        {
          todos.map(v => {
            return <div key={v.title}>{v.title}</div>
          })
        }
        <div className='box'>
          {count}
        </div>
        <button onClick={add}>点我</button>
      </div>
    )
  }
}
export default App
