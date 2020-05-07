import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import { Button, Tag, Input, Table } from 'antd'
import '../style'

const xuhua = (Tmpl) => {
  class Xu extends Tmpl {
    state = {
      name:'pangzhu',
      ...this.state
    }
    componentDidMount () {
      super.componentDidMount()
    }
    add () {
      console.log('我是你的小可爱')
    }
    render () {
      return <div>
        <button>{this.props.num}</button>
        {super.render()}
      </div>
    }
  }
  return Xu
}

@xuhua
class Bbbb extends React.Component {
  componentDidMount () {
    this.add()
  }
  render () {
    return <div>{this.props.num}</div>
  }
}

class App extends React.Component {
  static propTypes = {
    example: PropTypes.object
  }
  state = {
    jinzhu: '小金猪',
    count:0
  }
  componentDidMount () {
    // this.props.example.getDate()
  }
  aaa=() => {
    this.setState({ count:this.state.count + 1 })
  }
  render () {
    return (
      <div>
        我是大神，你是什么，我的天呢 {this.state.count}
        <button onClick={this.aaa}>甲乙</button>
        <Bbbb num={'一点点'} />
      </div>
    )
  }
}
export default App
