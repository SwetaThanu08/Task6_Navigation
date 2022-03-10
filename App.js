import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootDrawNav from './Navigation/RootDrawNav';

export default function App() {
  return (
      <NavigationContainer>
        <RootDrawNav/>
      </NavigationContainer>
  );
}
