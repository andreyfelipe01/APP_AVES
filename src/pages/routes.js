import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TelaHome from '../screens/tela1'
import Tela2 from '../screens/tela2'
import Tela3 from '../screens/tela3'
import Financas from '../screens/financas'
import Lotes from '../screens/lotes'

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
  
        <Stack.Screen 
            name="Home1" 
            component={TelaHome}
        />

        <Stack.Screen 
            name="Financas" 
            component={Financas}
        
        />

        <Stack.Screen 
            name="Lotes" 
            component={Lotes} 

        
        />
  
      </Stack.Navigator>
    );
  }

export function Routes () {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor:'white',
                tabBarShowLabel: false,
                headerShown: false,
                tabBarHideOnKeyboard: true,

                tabBarStyle:{
                    backgroundColor: '#8b5743',
                    paddingLeft:40,
                    paddingRight:40,
                    height:'7%'
                }
                   
            }}
                    
        >
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color , size , focused}) => {
                        if(focused){
                            return <Ionicons name="home" size={size} color={color}/>
                        }
                            return <Ionicons name="home-outline" size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen
                name="Home2"
                component={Tela2}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color , size , focused}) => {
                        if(focused){
                            return <Ionicons name="search" size={size} color={color}/>
                        }
                            return <Ionicons name="search-outline" size={size} color={color} />
                    },
                    

                }}
            />
            <Tab.Screen
                name="Home3"
                component={Tela3}
                options={{
                    
                    headerShown: false,
                    tabBarIcon: ({color , size , focused}) => {
                        if(focused){
                            return <FontAwesome name="user" size={size} color={color}/>
                        }
                            return <FontAwesome name="user-o" size={22} color={color} />
                    }

                }}
            />

        </Tab.Navigator>
    )
}
