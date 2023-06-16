import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'

const CustomHeader = ({title, subtitle}) => {
  return (
    <View style={{paddingHorizontal: 25, height: '30%', paddingTop: 40, position: 'relative' }}>
          <View style={styles.appName}>
              <Image source={require('../assets/neublock-logo.png')}
                style={styles.logo}
              />
            <Text style={styles.appNameNeu}>NeuBlock</Text>
            
          </View>
          <Text
          style={{
            fontSize: 24,
            fontWeight: '500',
            color: '#fff',
            marginBottom: -10,
          }}>
          Enter your
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '500',
            color: '#fff',
            marginBottom: 20,
          }}>
          {title}
        </Text>
        <Text style={styles.textProvide}>{subtitle}</Text>
      
        <Image source={require('../assets/images/misc/line_bottom.png')}
          style={{
            position: 'absolute',
            bottom: -15,
            right: 0,
            left: 0,
            height: 80,
            width: '100%',
          }}
        />
        <Image source={require('../assets/images/misc/line_middle.png')}
          style={{
            position: 'absolute',
            bottom: 25,
            right: 0,
            left: 0,
            height: 160,
            width: '110%',
          }}
        />
        <Image source={require('../assets/images/misc/terra.png')}
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            height: 40,
            width: 40,
          }}
        />
        <Image source={require('../assets/images/misc/eth.png')}
          style={{
            position: 'absolute',
            bottom: 0,
            right: -15,
            height: 70,
            width: 100,
          }}
        />
        <Image source={require('../assets/images/misc/ellipse_bottomleft.png')}
          style={{
            position: 'absolute',
            bottom: -150,
            left: -150,
            height: 300,
            width: 300,
          }}
        />
        <Image source={require('../assets/images/misc/coin.png')}
          style={{
            position: 'absolute',
            top: 75,
            right: 65,
            height: 50,
            width: 60,
          }}
        />
      
      </View>

  )
}

export default CustomHeader


const styles = StyleSheet.create({
    appName: {
      flexDirection: 'row',
      marginBottom: 20,
      gap: 5,
      alignItems: 'center',
    },
    appNameNeu: {
      fontSize: 16,
      fontWeight: 700,
      color: '#fff',
    },
    textProvide:{
      fontSize: 14,
      fontWeight: 400,
      color: '#fff',
    },
    logo: {
      marginTop: 0,
      width: 24,
      height: 24,
    },
  });
  