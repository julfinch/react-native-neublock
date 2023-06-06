import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import GlobalScreen from '../screens/GlobalScreen';
import ChartScreen from '../screens/ChartScreen';
import CryptocurrencyScreen from '../screens/CryptocurrencyScreen';
import NewsScreen from '../screens/NewsScreen';
import NftScreen from '../screens/NftScreen';

import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
            headerShown: false,
            drawerActiveBackgroundColor: '#aa18ea',
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#333',
            drawerLabelStyle: {
                marginLeft: -25,
                fontSize: 15,
            },
    }}> 
        <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{
            drawerIcon: ({color}) => (
                <Ionicons name="home-outline" size={22} color={color} />
            ),
            }}
        />
        <Drawer.Screen
            name="Global"
            component={GlobalScreen}
            options={{
            drawerIcon: ({color}) => (
                <Ionicons name="globe-outline" size={22} color={color} />
            ),
            }}
        />
        <Drawer.Screen
            name="Nft"
            component={NftScreen}
            options={{
            drawerIcon: ({color}) => (
                <Ionicons name="color-palette-outline" size={22} color={color} />
            ),
            }}
        />
        <Drawer.Screen
            name="Cryptocurrency"
            component={CryptocurrencyScreen}
            options={{
            drawerIcon: ({color}) => (
                <Ionicons name="rocket-outline" size={22} color={color} />
            ),
            }}
        />
        <Drawer.Screen
            name="Chart"
            component={ChartScreen}
            options={{
            drawerIcon: ({color}) => (
                <Ionicons name="bar-chart-outline" size={22} color={color} />
            ),
            }}
        />
        <Drawer.Screen
            name="News"
            component={NewsScreen}
            options={{
            drawerIcon: ({color}) => (
                <Ionicons name="newspaper-outline" size={22} color={color} />
            ),
            }}
        />

    </Drawer.Navigator> 
  )
}

export default AppStack