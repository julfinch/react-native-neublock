import { StyleSheet, Image,  View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CryptocurrencyCard = ({token}) => {
  return (
    <TouchableOpacity style={styles.container}>
      {/* LEFT SIDE */}
      <View style={styles.leftContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={{
              uri: "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
            }}
            resizeMode='contain'
            style={styles.logoImage}
          />
        </View>
        <View style={styles.leftTextContainer}>
          <Text style={styles.coinName}>
            {token?.name}
          </Text>
          <Text style={styles.coinVolume}>
            {token?.cap}
          </Text>
        </View>
      </View>

      {/* RIGHT SIDE */}
      <View style={styles.rightContainer}>
        <View style={styles.rightTextContainer}>
          <Text style={styles.coinPrice}>
            {token?.price}
          </Text>
          <Text style={styles.coinPercentage}>
            {token?.profit}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CryptocurrencyCard

const styles = StyleSheet.create({
  logoImage: {
    width: "70%",
    height: "70%",
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'red',
    height: 60,
    marginVertical: 2,
    paddingHorizontal: 6,
  },
  leftContainer: {
    flexDirection: 'row',
    width: '50%',
  },
  logoContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  leftTextContainer: {
    marginLeft: 8,
    justifyContent: 'space-between',
  },
  coinName: {
    textTransform: 'uppercase',
    fontSize: 15,
    fontWeight: 800,
  },
  coinVolume: {
    fontSize: 15
  },
  rightContainer: {
    width: '50%',
    height: "100%",
  },
  rightTextContainer: {
    alignItems: 'flex-end', 
    justifyContent: 'space-between',
    height: "100%",
  },
  coinPrice: {
    fontSize: 15
  },
  coinPercentage: {
    fontSize: 15
  },
});
