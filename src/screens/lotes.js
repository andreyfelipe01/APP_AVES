import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Dimensions,  } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function Tela({navigation}){
  return(
    <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Home1')}}>
        <AntDesign name="left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.text}>Lotes</Text>
      </View>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    height:'100%',
    width:'100%',
  },
  header:{
    backgroundColor:'#8b5742',
    flexDirection:'row',
    height:'10%',
    alignItems:'center',
    padding:20
  },
  text:{
    color:'white',
    fontSize:20,
    marginLeft:'35%'
  },
  grafico:{
    elevation:22,
    backgroundColor:'red'

  }
})