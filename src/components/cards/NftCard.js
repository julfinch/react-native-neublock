import { StyleSheet, View, Image, Text } from 'react-native'
import React from 'react'

const NftCard = ({nft}) => {
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.imageWrapper}>
        <Image
          source={{
            uri: nft?.image_url}}
          style={styles.nftImage}
        />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.cardTextName}>{nft?.name}</Text>
        <Text style={styles.cardText}>ID: {nft?.id}</Text>
      </View>
      
    </View>
  )
}

export default NftCard


const styles = StyleSheet.create({
  cardWrapper: {
    flex:1, 
    // backgroundColor: '#7008CB',
    backgroundColor: '#2A2B54',
    padding: 7,
    minWidth: '40%',
    height: 190,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#32385E',
  },
  imageWrapper: {
    maxHeight: '70%',
  },
  nftImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  textWrapper: {
    height: '30%',
    gap:5,
  },  
  cardTextName: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 13,
  },
  cardText: {
    color: 'rgba(255,255,255,0.3)',
    textAlign: 'center',
    fontSize: 12,
  },

});
