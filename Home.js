import React from "react";
import { StyleSheet,View,Text } from "react-native";

export default function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.nameText}> Home screen 🏡 </Text>    
        </View>
    );
};

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#CEB3F0',
        
       
    },
    nameText: {
        fontWeight:'500',
        fontSize:26,
        color: '#000',
        marginTop:250,
        marginLeft:90,
        fontStyle:"italic",
    },
});
