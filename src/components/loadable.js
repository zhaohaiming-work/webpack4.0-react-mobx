import React from 'react'
import nprogress from 'nprogress'
class OverLoadTmpl extends React.Component {
  constructor (props) {
    super(props)
    nprogress.start()
  }
  componentWillUnmount () {
    nprogress.done()
  }
  render () {
    return null
  }
}
export default <OverLoadTmpl />
