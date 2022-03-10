import React from "react";
import { StyleSheet,View,Text,TouchableOpacity } from "react-native";

export default function FirstScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.nameText}> Welcome to First Screen </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Screen 2")} style={styles.Touch}>
                <Text style={styles.Text}> Navigate to Screen 2 </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#E2FBFF',
        
    },
    nameText: {
        fontWeight:'500',
        fontSize:26,
        color: 'green',
        alignSelf:'center',
        marginTop:230,
      },
    Touch: {
        backgroundColor: "#C8FC8F",
        borderRadius:10,
        marginTop:40,
        width:250,
        alignSelf:'center',
    },
    Text: {
        fontWeight:'300',
        fontSize:26,
        color: '#000',
      },
});
