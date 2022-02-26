import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import DrawerNavigator from './Navigators/DrawerNavigator';

function App() {

  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default App;
