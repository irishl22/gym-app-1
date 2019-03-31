import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Store from './components/Store'
import StoreLanding from './components/StoreLanding'
import Products from './components/Products'

export default (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/store" render={props => {
      return (
          <Switch>
            <Route path="/store" exact component={StoreLanding} />
            <Route path="/store/products/:category" component={Products} />
            <Route path="/store/products" component={Products} />
          </Switch>
      )
    }} />
    <Route component={NotFound} />
  </Switch>
)

function NotFound() {
  return (
    <h1>404 page not found</h1>
  )
}