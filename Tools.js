import React from "react";
import { StyleSheet,View,Text } from "react-native";

export default function Tools(){
    return(
        <View style={styles.container}>
            <Text style={styles.nameText}> Tools ⚙ </Text>
        </View>
    );
};

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#BABABA',
    },
    nameText: {
        fontWeight:'500',
        fontSize:26,
        paddingLeft : 4,
        color: '#000',
        marginTop:250,
        marginLeft:150,
        fontStyle:'italic',
      },
});
