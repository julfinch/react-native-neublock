import { View, Text,Image, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const WatchlistCard = ({item}) => {
  return (
    <View style={styles.cardWrapper}>
        <View style={styles.contentWrapper}>
            <Image
            source={require('../../assets/doodles-pic.png')}
            style={{height: 30, width: 30, borderRadius: 50,borderColor:'#fff',borderWidth: 1,}}
            />
            <Text style={styles.symbol}>{item.symbol}</Text>
        </View>
        <View style={styles.contentWrapper}>
            <Text style={styles.price}>${item.currentPrice}</Text>
            <View style={styles.coinPercentage}>
            {item.percentChange > 0 ? <Ionicons name="caret-up" color="limegreen" size={20} style={styles.caret}/> : <Ionicons name="caret-down" color="red" size={20} />}
            {item.percentChange > 0 ? (<Text style={{fontSize: 15, color: 'limegreen'}}>{item.percentChange}%</Text>) : (<Text style={{fontSize: 15, color: 'red'}}>{item.percentChange}%</Text>)}
            </View>
        </View>
    </View>
  )
}

export default WatchlistCard


const styles = StyleSheet.create({
    contentWrapper: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    cardWrapper: {
        backgroundColor: '#2A2B54',
        padding: 7,
        minWidth: '35%',
        gap: 10,
        height: 80,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#32385E',
    },
    symbol: {
        textTransform: 'uppercase',
        color: '#fff',
        fontSize: 15,
    },
    price: {
        color: '#fff',
        fontSize: 19,
        fontWeight: 600,
    },  
    coinPercentage: {
        flexDirection: 'row'
    },

});