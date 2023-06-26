import { View, Text,Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONT, SIZES, images } from "../../../constants";
import millify from 'millify';

const PopularDistricts = ({item, handleCardPress }) => {

    function cutRestOfParagraph(paragraph) {
      // Get the index of the first period.
      const periodIndex = paragraph.indexOf(".");
      // If there is no period, return the empty string.
      if (periodIndex === -1) {
        return "";
      }
      // Otherwise, return the first sentence of the paragraph.
      return paragraph.slice(0, periodIndex + 1);
    }

      const cutParagraph = cutRestOfParagraph(item?.description);

  return (
    <TouchableOpacity style={styles.cardWrapper} onPress={() => handleCardPress(item)}>
        <View style={styles.contentWrapper}>
            <Image
            source={require('../../assets/doodles-pic.png')}
            style={styles.image}
            />
            <Text style={styles.name}>{item.name}</Text>
        </View>
        <Text style={styles.desc}>{cutParagraph}</Text>
        <View style={styles.contentWrapper}>
            <Text style={styles.price}>${item.currentPrice}</Text>
            <View style={styles.coinPercentage}>
            {item.percentChange > 0 ? <Ionicons name="caret-up" color="limegreen" size={20} style={styles.caret}/> : <Ionicons name="caret-down" color="red" size={20} />}
            {item.percentChange > 0 ? (<Text style={{fontSize: 15, color: 'limegreen'}}>{item.percentChange}%</Text>) : (<Text style={{fontSize: 15, color: 'red'}}>{item.percentChange}%</Text>)}
            </View>
        </View>
        <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
            <View style={{}}>
                <Text style={{color: COLORS.gray}}>Average price</Text>
                <Text style={{fontWeight: 500, color: '#fff'}}>{millify(item?.stats.average_price)}</Text>
            </View>
            <View style={{}}>
                <Text style={{color: COLORS.gray}}>Floor price</Text>
                <Text style={{fontWeight: 500, color: '#fff'}}>{item?.stats.floor_price}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default PopularDistricts


const styles = StyleSheet.create({
    image: {
        height: 40, 
        width: 40, 
        borderRadius: 50,
        borderColor:'#fff',
        borderWidth: 1,
    },
    contentWrapper: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    cardWrapper: {
        backgroundColor: '#2A2B54',
        padding: 7,
        width: 190,
        gap: 10,
        height: 180,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#32385E',
        display: 'flex',
        // flexDirection: 'column',
        // flexWrap: 'wrap',
    },
    name: {
        color: '#fff',
        fontSize: 15,
    },
    desc: {
        color: '#fff',
        fontSize: SIZES.small,
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