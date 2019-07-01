import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import { Button, Tag } from 'antd'
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
    const { todos, count, add, dateList, unfinishedTodos } = this.props.example
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
        <div>
          {
            unfinishedTodos.map(v => {
              return <section key={v.title}>{v.title}</section>
            })
          }
        </div>
        <Button onClick={add}>点我</Button>
        <Tag>Tag 1</Tag>
        <Button type='primary' onClick={add}>点我</Button>
        <div className='pd-10'>
          {dateList.map((v, i) => <Tag key={i}>{v.periodStr}</Tag>)}
        </div>
        <div>
          <Button>你说嘴巴嘟嘟</Button>
        </div>
        <div>
          <Tag>你说嘴巴嘟嘟</Tag>
          <Tag>面筋哥哥</Tag>
        </div>
        <div>
          毛弟
        </div>
      </div>
    )
  }
}
export default App
