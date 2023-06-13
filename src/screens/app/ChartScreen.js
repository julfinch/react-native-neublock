import { StyleSheet, SafeAreaView, View, Image, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React, {useEffect} from 'react'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  withSpring,
  withRepeat,
} from 'react-native-reanimated'
import Ionicons from 'react-native-vector-icons/Ionicons';


const ChartScreen = ({navigation}) => {
  const logoProgress = useSharedValue(0);
  const logoScale = useSharedValue(2);
  const logoPosition = useSharedValue(0);
  const nameProgress = useSharedValue(0);
  const boxProgress = useSharedValue(0);
  const boxPosition = useSharedValue(25);

  const logoReanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: logoProgress.value,
      transform: [
        {
          scale: logoScale.value
        },
      ],
      marginTop: logoPosition.value
    }
  }, [])

  const nameReanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: nameProgress.value,
    }
  }, [])

  const boxReanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: boxProgress.value,
      bottom: boxPosition.value,
    }
  })

  useEffect(() => {
    logoProgress.value = withTiming(1, { duration: 3000 });
    nameProgress.value = withTiming(1, { duration: 3000 })
    logoScale.value = withTiming(1, { duration: 5000 });
    logoPosition.value = withSequence(
      withTiming(0, { duration: 2000 }),
      withTiming(0, { duration: 2000 }),
      withTiming(-420, { duration: 3000 }),
    );
    boxProgress.value = withSequence(
      withTiming(0, { duration: 4000}),
      withTiming(1, { duration: 3000}),
    );
    boxPosition.value = withSequence(
      withTiming(-25, { duration: 4000}),
      withTiming(25, { duration: 3000}),
    )

  }, [])

  return (
    <SafeAreaView style={styles.safeAreaViewWrapper}>
      <ImageBackground
          source={require('../../assets/onboarding2-bg.png')}
          style={styles.imageBg}>
          
          <Animated.Image source={require('../../assets/neublock-logo.png')}
            style={[styles.logo, logoReanimatedStyle]}
          />
          <Animated.View style={[styles.appName, nameReanimatedStyle]}>
            <Text style={styles.appNameNeu}>NEU</Text>
            <Text style={styles.appNameBlock}>BLOCK</Text>
          </Animated.View>
          
          <Animated.View style={[styles.box, boxReanimatedStyle]}>
            <View style={styles.buildYour}>
              <Text style={styles.build}>Build</Text>
              <Text style={styles.your}>your</Text>
            </View>
            <Text style={styles.future}>future</Text>
            
            <Text style={styles.start}>Start investing today </Text>
          
            <TouchableOpacity style={styles.button}>
              <Text style={styles.start}>Let's start</Text>
            </TouchableOpacity>

          </Animated.View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default ChartScreen


const styles = StyleSheet.create({
  safeAreaViewWrapper: {
    justifyContent: 'center',
    position: 'relative',
  },
  appName: {
    flexDirection: 'row',
    marginTop: 5,
  },
  appNameNeu: {
    fontSize: 21,
    fontWeight: 800,
    color: '#e64bf1',
  },
  appNameBlock: {
    fontSize: 21,
    fontWeight: 800,
    color: '#29e7f9',
  },
  imageBg: {
    height: '100%', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginTop: 0,
    width: '20%',
    height: '10%',
  },
  buildYour: {
    flexDirection: 'row',
    gap: 10,
  },
  box:{
    position: 'absolute',
    bottom: -25,
    alignItems: 'center',
    width: '90%',
    height: 400,
    backgroundColor: '#2A2B54',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#32385E',
    paddingVertical: 40,
  },
  build:{
    fontSize: 40,
    fontWeight: 800,
    color: '#29e7f9',
  },
  your:{
    fontSize: 40,
    fontWeight: 800,
    color: '#fff',
  },
  future:{
    marginTop: -10,
    fontSize: 40,
    fontWeight: 800,
    marginBottom: 20,
    color: '#e64bf1',
  },
  start:{
    fontSize: 20,
    fontWeight: 500,
    color: '#fff',
  },
  button:{
    marginTop: 130,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 50,
    backgroundColor: '#7008CB',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#32385E',
  },
});
