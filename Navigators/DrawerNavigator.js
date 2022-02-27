import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ExpenseCategoryScreen from '../Screens/ExpenseCategoryScreen';
import ExpenseLoggerScreen from '../Screens/ExpenseLoggerScreen';
import HomeScreen from '../Screens/HomeScreen';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator useLegacyImplementation={false} initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="ExpenseCategoryScreen" component={ExpenseCategoryScreen} />
      <Drawer.Screen name="ExpenseLoggerScreen" component={ExpenseLoggerScreen} options={{unmountOnBlur:true}} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;