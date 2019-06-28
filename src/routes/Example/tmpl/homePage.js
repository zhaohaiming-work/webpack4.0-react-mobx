import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import { Button } from 'antd-mobile'
import '../style'
@inject('example')
@observer
class App extends React.Component {
  static propTypes = {
    example: PropTypes.object
  }
  componentDidMount () {
    console.log(this.props)
    this.props.example.getDate()
  }
  add = () => {

  }
  render () {
    const { todos, count, add, dateList } = this.props.example
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
        <Button>点我</Button>
      </div>
    )
  }
}
export default App
