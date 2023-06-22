import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const WatchlistCard = ({item}) => {
  return (
    <View style={{ padding: 16,}}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Image
            source={require('../../assets/doodles-pic.png')}
            style={{height: 40, width: 40, borderRadius: 50,borderColor:'#fff',borderWidth: 1,}}
            />
            <Text>{item.symbol}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={styles.price}>{item.currentPrice}</Text>
            <View style={styles.coinPercentage}>
            {item.percentChange > 0 ? <Ionicons name="caret-up" color="limegreen" size={20} style={styles.caret}/> : <Ionicons name="caret-down" color="red" size={20} />}
            {item.percentChange > 0 ? (<Text style={{color: 'limegreen'}}>{item.percentChange}%</Text>) : (<Text style={{color: 'red'}}>{item.percentChange}%</Text>)}
            </View>
        </View>
    </View>
  )
}

export default WatchlistCard


const styles = StyleSheet.create({
    safeAreaViewWrapper: {
        flex:1, 
        backgroundColor: '#7b00ff'
    },
    price: {
        color: '#fff',
        fontSize: 24,
    },  
    coinPercentage: {
        flexDirection: 'row'
    },

});