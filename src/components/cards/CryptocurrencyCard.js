import { StyleSheet, Image,  View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';


const sparkline = [
  9515.0454185372,
  9540.1812284677,
  9554.2212643043,
  9593.571539283,
  9592.8596962985,
  9562.5310295967,
  9556.7860427046,
  9388.823394515,
  9335.3004209165,
  9329.4331700521,
  9370.9993109108,
]

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
          
          <View style={styles.coinPercentage}>
            {token.profit > 0 ? <Ionicons name="caret-up" color="limegreen" size={20} style={styles.caret}/> : <Ionicons name="caret-down" color="red" size={20} />}
            {token.profit > 0 ? (<Text style={{color: 'limegreen'}}>{token.profit}%</Text>) : (<Text style={{color: 'red'}}>{token.profit}%</Text>)}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CryptocurrencyCard

const styles = StyleSheet.create({
  logoImage: {
    width: "100%",
    height: "100%",
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2A2B54',
    height: 60,
    marginVertical: 4,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#32385E',
  },
  leftContainer: {
    flexDirection: 'row',
    width: '50%',
  },
  logoContainer: {
    width: 50,
    height: 50,
    padding: 0,
    backgroundColor: '#191919',
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  leftTextContainer: {
    marginLeft: 8,
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  coinName: {
    textTransform: 'uppercase',
    fontSize: 17,
    fontWeight: 800,
    color: '#fff',
  },
  coinVolume: {
    fontSize: 15,
    color: '#fff',
  },
  rightContainer: {
    width: '50%',
    height: "100%",
  },
  rightTextContainer: {
    alignItems: 'flex-end', 
    justifyContent: 'space-between',
    height: "100%",
    paddingVertical: 8,
  },
  coinPrice: {
    fontSize: 17,
    fontWeight: 800,
    color: '#fff',
  },
  coinPercentage: {
    flexDirection: 'row'
  },
});
