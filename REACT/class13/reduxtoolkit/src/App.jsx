import React from 'react'
import CounterComponent from './components/CounterComponent'
import { store } from './app/Store'
import { Provider } from 'react-redux'
import Category from './components/Category'
import Products from './components/Products'

const App = () => {
  return (
    <Provider store={store}>
    <div>App

      <CounterComponent/>
      <Category/>
      <Products/>
    </div>
    </Provider>
  )
}

export default App;