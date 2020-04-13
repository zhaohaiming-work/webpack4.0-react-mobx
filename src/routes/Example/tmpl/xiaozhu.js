import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import { Button, Tag, Input, Table } from 'antd'
import '../style'
import Test from './test'
import { withRouter } from 'react-router-dom'
import { withRef, listenersEvent, eventEmitter } from 'func'

@listenersEvent(['add', 'xiaojinzhu', 'haiming', 'lalala'])
@withRef
class App extends React.Component {
  static propTypes = {
    example: PropTypes.object
  }
  state={
    value:''
  }
  componentDidMount () {
    // console.log(eventEmitter)
  }
  addCallback = (str) => {
    console.log(str)
  }
  zaidianwo =() => {
    eventEmitter.emit('add', '小笨猪')
    eventEmitter.emit('xiaojinzhu', '打金枝')
    eventEmitter.emit('haiming', '打金枝')
  }
  change=val => {
    console.log(val.target.value)
    this.setState({ value:val.target.value.trim() })
  }
  render () {
    return (
      <div>
        金枝是个小笨猪
        <Input onChange={this.change} />
        <button onClick={this.add}>点我</button>
        <button onClick={this.zaidianwo}>再点我</button>
      </div>
    )
  }
}
export default App
