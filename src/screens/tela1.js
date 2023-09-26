import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Tela({navigation}){
    return(
        <SafeAreaView>
        <ScrollView >
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="egg-outline" size={40} color="white"   />
                <Text style={{color: 'white', }}>OVO FÁCIL</Text>
            </View>
            <View style={styles.divmenu}>
                <View style={styles.userepesquisa}>
                    <FontAwesome style={{borderRadius: 99, padding:10, backgroundColor:'#8b5742', }} name="user" size={40} color="white" />
                    <View style={styles.sectionStyle}>
                    <Image 
                        source={require('../icon/search.png')} 
                        style={styles.imageStyle} 
                    /> 
                    <View style={{width:'80%'}}>
                    <TextInput
                        placeholder="pesquisar" 
                        underlineColorAndroid="transparent" 
                        
                    />
                    </View>
                    </View> 
                </View>
                <View style={styles.botoes}>
                    <View style={styles.botao1}>
                        <TouchableOpacity>
                            <Image style={styles.iconesabaixo} source={require('../icon/galinha.png')}/>
                        </TouchableOpacity>
                        <Text>Granja</Text>
                    </View>
                    <View style={styles.botao1}>
                        <TouchableOpacity
                        onPress={()=>{navigation.navigate('Financas')}}
                        >
                            <Image style={styles.iconesabaixo} source={require('../icon/money.png')}/>
                            
                        </TouchableOpacity>
                        <Text>Finanças</Text>
                    </View>
                    <View style={styles.botao1}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('Lotes')}} >
                            <Image style={styles.iconesabaixo} source={require('../icon/lote.png')}/>
                        </TouchableOpacity>
                        <Text>lotes</Text>
                    </View>
                    <View style={styles.botao1}>
                        <TouchableOpacity>
                            <Image style={styles.iconesabaixo} source={require('../icon/note.png')}/>
                        </TouchableOpacity>
                        <Text>Anotações</Text>
                    </View>
                </View> 
            </View>

            <Text style={{fontWeight:'bold', marginTop:20,marginBottom:20, marginLeft:15, fontSize:20 }}>Visto recente</Text>            
            
            <View  style={styles.vistorecente0}>
                <View style={styles.vistorecente}>
                    <View>
                    <AntDesign name="appstore-o" size={45} color="black" style={{backgroundColor:'#8b5742', borderRadius:6,marginTop:4  }} />
                    </View>
                    <View style={styles.vistorecente2}> 
                        <Text>Lotes</Text>
                        <Text style={{fontSize:30, fontWeight:'bold'}}>5</Text>
                    </View>
                </View>
                <View style={styles.vistorecente3}>
                    <Text style={{marginTop:-1}}>Lotes ativos</Text>
                    <TouchableOpacity>
                    <View style={{marginTop:10}}>
                    <AntDesign name="right" size={20} color="#5b5e60" />
                    </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View  style={styles.vistorecente0}>
                <View style={styles.vistorecente}>
                    <View>
                    <AntDesign name="appstore-o" size={45} color="black" style={{backgroundColor:'#8b5742', borderRadius:6,marginTop:4  }} />
                    </View>
                    <View style={styles.vistorecente2}> 
                        <Text>Lotes</Text>
                        <Text style={{fontSize:30, fontWeight:'bold'}}>5</Text>
                    </View>
                </View>
                <View style={styles.vistorecente3}>
                    <Text style={{marginTop:-1}}>Lotes ativos</Text>
                    <TouchableOpacity>
                    <View style={{marginTop:10}}>
                    <AntDesign name="right" size={20} color="#5b5e60" />
                    </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View  style={styles.vistorecente0}>
                <View style={styles.vistorecente}>
                    <View>
                    <AntDesign name="appstore-o" size={45} color="black" style={{backgroundColor:'#8b5742', borderRadius:6,marginTop:4  }} />
                    </View>
                    <View style={styles.vistorecente2}> 
                        <Text>Lotes</Text>
                        <Text style={{fontSize:30, fontWeight:'bold'}}>5</Text>
                    </View>
                </View>
                <View style={styles.vistorecente3}>
                    <Text style={{marginTop:-1}}>Lotes ativos</Text>
                    <TouchableOpacity>
                    <View style={{marginTop:10}}>
                    <AntDesign name="right" size={20} color="#5b5e60" />
                    </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View  style={styles.vistorecente0}>
                <View style={styles.vistorecente}>
                    <View>
                    <AntDesign name="appstore-o" size={45} color="black" style={{backgroundColor:'#8b5742', borderRadius:6,marginTop:4  }} />
                    </View>
                    <View style={styles.vistorecente2}> 
                        <Text>Lotes</Text>
                        <Text style={{fontSize:30, fontWeight:'bold'}}>5</Text>
                    </View>
                </View>
                <View style={styles.vistorecente3}>
                    <Text style={{marginTop:-1}}>Lotes ativos</Text>
                    <TouchableOpacity>
                    <View style={{marginTop:10}}>
                    <AntDesign name="right" size={20} color="#5b5e60" />
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f1f1f1',
        width:'100%',
        height:'100%'
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#8b5742',
        padding:12,
        marginBottom:'5%',
        width:'100%,',
        height:'9%'
    },
    divmenu:{
        backgroundColor:'white',
        padding:30,
        borderRadius:23,
        elevation:10,
        height:'25%',
        width:'94%',
        marginLeft:'3%'
    },
    userepesquisa:{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        marginTop:-20

    },
    sectionStyle: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderWidth: 1.3,
        borderColor: '#8b5742',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent:'space-evenly',
        height:'60%'
    },
    imageStyle: {
        height: 20,
        width: 20
    },
    iconesabaixo:{
        width:40,
        height:40,
        backgroundColor:'#8b5742',
        borderRadius:5,
    },
    botoes:{
        marginTop:'6%',
        flexDirection:'row',
        gap:20,
        justifyContent: 'center',
        
    },
    botao1:{
        alignItems: 'center',
    },
    vistorecente0:{
        backgroundColor:'white',
        padding:12,
        elevation:20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:12,
        width:'94%',
        marginLeft:'3%',
        borderRadius:12
    },
    vistorecente:{
        flexDirection:'row'

    },
    vistorecente2:{
        flexDirection:'column',
        marginLeft:12
        
    },
    vistorecente3:{
        alignItems:'flex-end',
    }, 
});