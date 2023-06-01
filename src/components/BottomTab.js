import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screen/Home';
import Cargar from '../screen/Cargar';
import Details from '../screen/Details';
import Notificaciones from '../screen/Notificaciones';
import Perfil from '../screen/Perfil';

const homeName='Home';
const detailsName='Details';
const cargarName='Cargar';
const notificacionesName='Notificaciones';
const perfilName='Perfil';

const Tab = createBottomTabNavigator();

const BottomTab=()=>{
    return(
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName={homeName} 
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) =>{
                        let iconName;
                        let rn = route.name;
                        if (rn===homeName){
                            iconName=focused ? 'home' : 'home-outline';
                        } else if (rn===detailsName){
                            iconName=focused ? 'bookmark' : 'bookmark-outline';
                        } else if(rn===cargarName){
                            iconName=focused ? 'add' : 'add-circle-outline';
                        }else if(rn===notificacionesName){
                            iconName=focused ? 'notifications' : 'notifications-outline';
                        }else if(rn===perfilName){
                            iconName=focused ? 'person' : 'person-circle-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color}/>;
                    },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'grey',
                labelStyle: {paddingBottom: 10, fontSize: 10},
                style: {padding: 10, height: 70}
            }}>
            <Tab.Screen name={homeName} component={Home}/>
            <Tab.Screen name={detailsName} component={Details}/>
            <Tab.Screen name={cargarName} component={Cargar}/>
            <Tab.Screen name={notificacionesName} component={Notificaciones}/>
            <Tab.Screen name={perfilName} component={Perfil}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
};
export default BottomTab;