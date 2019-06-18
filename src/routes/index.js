import React from 'react'
import { Route } from 'react-router-dom'
import Counter from './Counter'
export default (
  <React.Fragment>
    <Route exact path='/counter' component={Counter} />
  </React.Fragment>
)
