import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import DrawerNavigator from './Navigators/DrawerNavigator';
import SplashScreen from 'react-native-splash-screen'

function App() {
  
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 200);
    
  }, []);

  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default App;
