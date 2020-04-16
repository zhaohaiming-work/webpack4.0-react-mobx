import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'

// const aaa = 888
class App extends React.Component {
  log = () => {
    console.log('不要点我')
  }
  render () {
    const layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    }
    const tailLayout = {
      wrapperCol: {
        offset: 8,
        span: 16,
      },
    }
    const Demo = () => {
      const onFinish = values => {
        console.log('Success:', values)
      }

      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo)
      }

      return (
        <Form
          {...layout}
          name='basic'
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label='Username'
            name='username'
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name='remember' valuePropName='checked'>
            <Checkbox>记住我</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type='primary' htmlType='submit'>
              提交
            </Button>
          </Form.Item>
        </Form>
      )
    }
    return (
      <React.Fragment>
        <Demo />
      </React.Fragment>
    )
  }
}

export default App
