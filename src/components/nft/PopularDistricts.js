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
        <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-between'}}>
            <View style={{}}>
                <Text style={{textAlign: 'center',color: COLORS.gray}}>Average price</Text>
                <Text style={{textAlign: 'center',fontWeight: 500, color: '#fff'}}>{millify(item?.stats.average_price)} ETH</Text>
            </View>
            <View style={{}}>
                <Text style={{textAlign: 'center',color: COLORS.gray}}>Floor price</Text>
                <Text style={{textAlign: 'center',fontWeight: 500, color: '#fff'}}>{item?.stats.floor_price} ETH</Text>
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
        padding: 12,
        width: 240,
        gap: 10,
        height: 180,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#32385E',
    },
    name: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 600,
    },
    desc: {
        color: '#fff',
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