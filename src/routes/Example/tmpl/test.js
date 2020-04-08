
import React, { useState, useContext } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

const AppContext = React.createContext({ title: '啦啦啦啦' })
const Navbar = () => {
  const { username } = useContext(AppContext)
  return (
    <div className='navbar'>
      <p>我的名字是：</p>
      <p>{username}</p>
    </div>
  )
}
class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”。
  static contextType = AppContext;
  render () {
    console.log(this.context)
    return <p>{this.context.title}</p>
  }
}
// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar (props) {
  return (
    <div>
      <ThemedButton />
      <Route path='/example/test' component={() => {
        return (
          <div>小笨猪</div>
        )
      }} />
    </div>
  )
}
export default function Button ({ name }) {
  const [buttonText, setButtonText] = useState('Click me,   please')
  const handleClick = () => {
    console.log(this)
    setButtonText('Thanks, been clicked!')
  }

  return <div>
    <AppContext.Provider value={{
      username: '小金猪',
      title: '大神来了'
    }}>
      <div className='App'>
        <Navbar />
        <Toolbar />
      </div>
    </AppContext.Provider>
    <button onClick={handleClick}>{buttonText}{name}</button>
    测试组件111
  </div>
}
