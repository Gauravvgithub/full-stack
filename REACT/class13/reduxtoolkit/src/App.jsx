import React from 'react'
import CounterComponent from './components/CounterComponent'
import { store } from './app/Store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
    <div>App

      <CounterComponent/>
    </div>
    </Provider>
  )
}

export default App