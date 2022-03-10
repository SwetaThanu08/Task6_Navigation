import React from "react";
import { View,Text} from 'react-native';

export default function Action() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor:'#C9E4FF'}}>
        <Text style={{fontSize:23,fontStyle:"italic",fontWeight:'600'}}>  No messages📩{'\n'}check again later !</Text>
      </View>
    );
  }