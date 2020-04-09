import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import { Button, Tag, Input, Table } from 'antd'
import '../style'
import Test from './test'
import { withRouter } from 'react-router-dom'
const ref = React.createRef()
const WithRef = (WrappedComponent) => {
  class Enhance extends React.PureComponent {
    componentWillReceiveProps (nextProps) {
      console.log('Current props', this.props)
      console.log('Next props', nextProps)
    }
    render () {
      const { forwardedRef, ...rest } = this.props
      // 把 forwardedRef 赋值给 ref
      return <WrappedComponent {...rest} ref={forwardedRef} />
    }
  };

  // React.forwardRef 方法会传入 props 和 ref 两个参数给其回调函数
  // 所以这边的 ref 是由 React.forwardRef 提供的

  return React.forwardRef((props, ref) => {
    return <Enhance forwardedRef={ref} {...props} />
  })
}
@WithRef
class Aaa extends React.PureComponent {
  constructor () {
    super()
  }
  render () {
    return <button>小笨猪</button>
  }
}
// @inject('example')
// @observer

class App extends React.Component {
  static propTypes = {
    example: PropTypes.object
  }
  constructor (props) {
    super(props)
    // this.lalala = React.createRef()
  }
  componentDidMount () {
    // console.log(this.props)
    // this.props.example.getDate()
  }
  add = () => {
    console.log(ref)
  }
  render () {
    return (
      <div onClick={this.add}>
        金枝是个小笨猪
        <Aaa ref={ref} />
      </div>
    )
  }
}
export default App
