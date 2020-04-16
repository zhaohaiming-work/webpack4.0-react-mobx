import React from 'react'
import './page-layout.scss'
import PropTypes from 'prop-types'
import './page-layout'
class App extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }
  render () {
    const { children } = this.props
    return (
      <React.Fragment>
        <div className='page-layout'>{children}</div>
      </React.Fragment>
    )
  }
}

export default App
