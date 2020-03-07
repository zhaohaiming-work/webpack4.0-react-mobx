import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import { Button, Tag } from 'antd'
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
    const { todos, count, add, dateList, unfinishedTodos } = this.props.example

    return (
      <div>
        <Test name='传进来的值' />
        {/* <Tag>Tag 1</Tag> */}
        <Button type='primary' onClick={add}>点我</Button>
        <div className='pd-10'>
          {dateList.map((v, i) => <Tag key={i}>{v.periodStr}</Tag>)}
        </div>
      </div>
    )
  }
}
export default App
