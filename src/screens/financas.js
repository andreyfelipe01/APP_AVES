import React , {useEffect} from "react";
import { Text, View, TouchableOpacity, StyleSheet, Dimensions,  } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function Tela({navigation}) {
  useEffect(()=>{
    navigation.getParent().setOptions({tabBarStyle:{display:'none'}})
  },[])

  return(
    <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={{marginLeft:'5%'}}
          onPress={()=>{
            navigation.getParent().setOptions({tabBarStyle:{display:'flex', backgroundColor: '#8b5743',paddingLeft:40,paddingRight:40,height:'7%'}})
            navigation.navigate('Home1')
      }}
      >
        <AntDesign name="left" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.text} >Finanças</Text>
        <TouchableOpacity style={{marginRight:'5%'}}>
        <SimpleLineIcons name="equalizer" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    height:'100%',
    width:'100%'
  },
  header:{
    backgroundColor:'#8b5742',
    justifyContent:'space-between',
    flexDirection:'row',
    height:'9%',
    alignItems:'center'
  },
  text:{
    color:'white',
    fontSize:24
  },
  grafico:{
    elevation:22,
    backgroundColor:'red'

  }
})