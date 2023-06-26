import { View, Text,Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const MyDistricts = ({item, handleCardPress }) => {
  return (
    <TouchableOpacity onPress={() => handleCardPress(item)}>
        <Image
            source={{
                uri: item?.image_url
                }}
            style={styles.image}
            resizeMode='contain'
        />
    </TouchableOpacity>
  )
}

export default MyDistricts


const styles = StyleSheet.create({
    image: {
        height: 40, 
        width: 40, 
        borderRadius: 50,
        borderColor:'#fff',
        borderWidth: 1,
    },
});