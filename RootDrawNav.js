import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootStackNav from './RootStackNav';

import Action from '../Screens.js/Action';
import Notification from '../Screens.js/Notification';

const Drawer = createDrawerNavigator();

export default function RootDrawNav() {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name='Main Page' component={RootStackNav}/>
        <Drawer.Screen name="Messages" component={Action} />
        <Drawer.Screen name="Notifications" component={Notification} />
      </Drawer.Navigator>
  );
}

