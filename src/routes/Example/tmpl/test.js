import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
// import { Button } from 'antd-mobile'
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
    // const { todos, count, add, dateList, unfinishedTodos } = this.props.example
    return (
      <div>
        测试页面
      </div>
    )
  }
}
export default App
