import React from "react";
import { StyleSheet,View,Text } from "react-native";

export default function SecondScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.nameText}> Welcome to Second Screen </Text>
        </View>
    );
};

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#C3F9FF',
    },
    nameText: {
        fontWeight:'500',
        fontSize:26,
        paddingLeft : 4,
        color: 'blue',
        alignSelf:'center',
        marginTop:260,
      },
});
