import React from 'react';
import { View,Text } from 'react-native';

export default function Notification() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor:"#E0C9FF"}}>
        <Text style={{fontSize:23,fontStyle:'italic',fontWeight:'600'}}>  No notifications🔔 {'\n'}check again later ! </Text>
      </View>
    );
  }
  