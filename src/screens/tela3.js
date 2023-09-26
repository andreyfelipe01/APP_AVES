import React from "react";
import { View, Text, StyleSheet, } from "react-native";

export default function Tela (){
    return(
        <View style={styles.text}>
            <Text>Tela 3 :)</Text>
        </View>
    )
}

const styles =  StyleSheet.create({
    text:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
    }
})