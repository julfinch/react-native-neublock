import * as SplashScreen from 'expo-splash-screen';
import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';
SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    MontserratBlack: require('./src/assets/fonts/Montserrat-Black.ttf'),
    MontserratBold: require('./src/assets/fonts/Montserrat-Bold.ttf'),
    MontserratExtraBold: require('./src/assets/fonts/Montserrat-ExtraBold.ttf'),
    MontserratRegular: require('./src/assets/fonts/Montserrat-Regular.ttf'),
    MontserratSemiBold: require('./src/assets/fonts/Montserrat-SemiBold.ttf'),
    NeueLight: require('./src/assets/fonts/NeueMachina-Light.otf'),
    NeueRegular: require('./src/assets/fonts/NeueMachina-Regular.otf'),
    NeueUltrabold: require('./src/assets/fonts/NeueMachina-Ultrabold.otf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded) {
        await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <NavigationContainer>
        {/* <AppStack /> */}
        <AuthStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
