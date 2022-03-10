import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FirstScreen from "../Screens.js/FirstScreen";
import Home from "../Screens.js/Home";
import Tools from "../Screens.js/Tools";

const Tab = createBottomTabNavigator();

export default function RootTabNav(){
    return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Tools" component={Tools}/>
        <Tab.Screen name="Screen 1" component={FirstScreen} />
    </Tab.Navigator>
    );
}