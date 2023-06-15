import { StyleSheet, SafeAreaView, View, Image, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React, {useEffect} from 'react'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
} from 'react-native-reanimated'

import CustomButton from '../../../src/components/CustomButton';

const OnboardingScreen = ({navigation}) => {
  const logoProgress = useSharedValue(0);
  const logoScale = useSharedValue(2);
  const logoPosition = useSharedValue(0);
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


  const boxReanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: boxProgress.value,
      bottom: boxPosition.value,
    }
  })

  useEffect(() => {
    logoProgress.value = withTiming(1, { duration: 1000 });
    logoScale.value = withTiming(1, { duration: 1000 });
    logoPosition.value = withSequence(
      withTiming(0, { duration: 2000 }),
      withTiming(0, { duration: 2000 }),
      withTiming(-420, { duration: 3000 }),
    );
    boxProgress.value = withSequence(
      withTiming(0, { duration: 5000}),
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
          
          <Animated.Image source={require('../../assets/images/misc/neublock_logo.png')}
            style={[styles.logo, logoReanimatedStyle]}
          />
          
          <Animated.View style={[styles.box, boxReanimatedStyle]}>
            <View style={styles.buildYour}>
              <Text style={styles.build}>Build</Text>
              <Text style={styles.your}>your</Text>
            </View>
            <View style={styles.buildYour}>
            <Text style={styles.your}>future</Text>
            <Text style={styles.now}>now</Text>
            </View>
            {/* <Text style={styles.start}>Start investing today </Text> */}
            <Text style={styles.desc}>NeuBlock is a cryptocurrency and NFT price tracker that will help you in your investing journey.</Text>
            {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Let's start</Text>
            </TouchableOpacity> */}
            <CustomButton width={'80%'} label={"Let's start"} onPress={() => navigation.navigate('Login')}/>

          </Animated.View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default OnboardingScreen


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
    width: '35%',
    height: '17%',
  },
  buildYour: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: -10,
  },
  box:{
    position: 'absolute',
    bottom: -25,
    alignItems: 'center',
    width: '90%',
    height: 330,
    backgroundColor: '#2A2B54',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#32385E',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  build:{
    fontFamily: 'NeueUltrabold',
    fontSize: 30,
    fontWeight: 800,
    color: '#29e7f9',
  },
  your:{
    fontFamily: 'NeueUltrabold',
    fontSize: 30,
    fontWeight: 800,
    color: '#fff',
  },
  now:{
    fontFamily: 'NeueUltrabold',
    fontSize: 30,
    fontWeight: 800,
    color: '#e64bf1',
  },
  start:{
    marginTop: 20,
    fontSize: 20,
    fontWeight: 500,
    color: '#fff',
  },
  desc:{
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 60,
    fontSize: 14,
    fontWeight: 500,
    color: 'rgba(255,255,255, 0.4)',
  },
});
