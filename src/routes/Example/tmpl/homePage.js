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
        <Button onClick={add}>点我</Button>
        <div>春光美</div>
        <Tag>Tag 1</Tag>
      </div>
    )
  }
}
export default App
