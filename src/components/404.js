import React from 'react'
import { Result, Button } from 'antd'
import { Link } from 'react-router-dom'
export default () => <Result
  status='404'
  title='404'
  subTitle='抱歉, 页面没找到'
  extra={<Link to='/'> <Button type='primary'>返回首页</Button></Link>}
/>
