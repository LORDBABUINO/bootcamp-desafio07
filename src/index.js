import React from 'react'
import { StatusBar } from 'react-native'

import './config/Reactotron'
import Routes from './routes'
import Header from './components/Header'

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#141419" />
    <Routes />
  </>
)

export default App
