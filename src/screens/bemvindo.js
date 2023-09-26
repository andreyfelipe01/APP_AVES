import React from "react";
import { Text, View, TouchableOpacity, TextInput, StyleSheet, Image } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

export default function BemVindo(){
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.divlogin}>
                    <Text style={{textAlign:'center', fontSize:30, marginBottom:30, marginTop:30}}>Bem-Vindo</Text>
                    <View style={styles.areadeinput}>
                    <AntDesign style={styles.icon} name="user" size={30} color="white" />
                    <View style={styles.sectionStyle}>
                    <TextInput
                        placeholder="Username" 
                        underlineColorAndroid="transparent"   
                    />
                    </View>
                    </View>
                    <View style={styles.areadeinput}>
                    <AntDesign style={styles.icon} name="mail" size={30} color="white" />
                    <View style={styles.sectionStyle}>
                    <TextInput
                        placeholder="E-mail" 
                        underlineColorAndroid="transparent"   
                    />
                    </View>
                    </View>
                    <View style={styles.areadeinput}>
                    <AntDesign style={styles.icon} name="lock" size={30} color="white" />
                    <View style={styles.sectionStyle}>
                    <TextInput
                        placeholder="Senha" 
                        underlineColorAndroid="transparent"   
                    />
                    </View>
                    </View>

                    <View style={styles.btlogin}>
                    <TouchableOpacity style={styles.login} >
                        <Text style={{color:'white'}}>Login In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Forgot Password</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.naotenhoc}>
                    <TouchableOpacity>
                        <Text>Não tenho a conta</Text>
                    </TouchableOpacity>
                </View>
                    
                </View>
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f1f1f1',
        width:'100%',
        height:'100%',
        alignItems:'center'
    },
    divlogin:{
        backgroundColor:'white',
        width:'90%',
        borderRadius:20,
        marginTop:'30%'
    },
    icon:{
        borderRadius: 99, 
        padding:10, 
        backgroundColor:'#8b5742', 
        textAlign:'center'
    },
    areadeinput:{
        flexDirection:'row',
        gap:10,
        alignItems:'center',
        padding:20

    },
    sectionStyle: {
        backgroundColor: '#fff',
        borderWidth: 1.3,
        borderColor: '#8b5742',
        borderRadius: 20,
        padding:7,
        width:'80%',
        height:'70%',
    },
    btlogin:{
        marginTop:'10%',
        width:'100%',
        width:'100%',
        alignItems:'center',
    },
    login:{
        borderRadius:20,
        backgroundColor:'#bd6644',
        height:'24%',
        width:'30%',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:7,
        marginTop:-19
    },
    naotenhoc:{
        marginTop:-60,
        marginLeft:'60%'
    }

})