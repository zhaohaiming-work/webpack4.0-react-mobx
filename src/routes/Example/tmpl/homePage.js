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
    // console.log(this.props)
    // this.props.example.getDate()
  }
  add = () => {

  }
  render () {
    const { todos, count, add, dateList, unfinishedTodos } = this.props.example
    const dataSource = [
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      },
    ]

    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
    ]
    return (
      <div>
        {/* <Test name='传进来的值' /> */}
        <Tag>Tag 1</Tag>
        <Input placeholder='Basic usage' />
        <Button onClick={add}>点我</Button>
        <div className='pd-10'>
          {dateList.map((v, i) => <Tag key={i}>{v.periodStr}</Tag>)}
        </div>
        <Table dataSource={dataSource} columns={columns} size='small' />
        {this.props.children}
      </div>
    )
  }
}
export default App
