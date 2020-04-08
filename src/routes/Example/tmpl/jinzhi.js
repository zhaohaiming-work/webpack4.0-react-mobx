import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import { Button, Tag, Input, Table } from 'antd'
import '../style'
import Test from './test'
@inject('example')
@observer
class App extends React.Component {
  static propTypes = {
    example: PropTypes.object
  }
  componentDidMount () {
    console.log(this.props)
    // this.props.example.getDate()
  }
  add = () => {

  }
  render () {
    return (
      <div>
        金枝是个小笨猪
      </div>
    )
  }
}
export default App
