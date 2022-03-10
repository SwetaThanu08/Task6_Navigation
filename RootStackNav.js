import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RootTabNav from "./RootTabNav";
import FirstScreen from "../Screens.js/FirstScreen";
import SecondScreen from "../Screens.js/SecondScreen";

const Stack = createNativeStackNavigator();

export default function RootStackNav(){
    return (
    <Stack.Navigator>
        <Stack.Screen name="RootTabNav" component={RootTabNav} options={{headerShown: false}} />
        <Stack.Screen name="Screen 1" component={FirstScreen} />
        <Stack.Screen name="Screen 2" component={SecondScreen} />
    </Stack.Navigator>
    );
}