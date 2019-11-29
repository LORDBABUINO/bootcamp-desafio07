// import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Header from './components/Header'
import Home from './pages/Home'

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
    },
    {
      defaultNavigationOptions: {
        header: Header,
      },
    }
  )
)

export default Routes
