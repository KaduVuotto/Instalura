import React, { Fragment, useState, useEffect } from 'react';
import Feed from './src/views/feed/feed';
import Login from './src/views/login/login';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const navigator = createStackNavigator({
  Login: { screen: Login },
  Feed: { screen: Feed },
})

const AppContainer = createAppContainer(navigator)

const App = () => {
  return (
    <AppContainer />
  )
};

export default App;
