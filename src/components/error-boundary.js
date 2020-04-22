import React from 'react'
import PropTypes from 'prop-types'
import { Result, Button, Icon, Typography } from 'antd'
const { Paragraph, Text } = Typography

class ErrorBoundary extends React.PureComponent {
  state = {
    error: null,
    errorInfo: null
  }
  static propTypes = {
    children: PropTypes.node
  }
  componentDidCatch (error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }
  render () {
    const { errorInfo, error } = this.state
    if (errorInfo) {
      // Error path
      return (
        <Result
          status='warning'
          title='Something went wrong!'
          subTitle='Please check and modify the following information'
        >
          <div className='desc'>
            <Paragraph>
              <Text
                strong
                style={{
                  fontSize: 16,
                }}
              >
                The content  has the following error:
              </Text>
            </Paragraph>
            <Paragraph>
              <details style={{ whiteSpace: 'pre-wrap' }}>
                {error && error.toString()}
                <br />
                {errorInfo.componentStack}
              </details>
            </Paragraph>
          </div>
        </Result>
      )
    }
    return this.props.children
  }
}
export default ErrorBoundary
