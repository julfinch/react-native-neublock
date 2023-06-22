import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import NftCard from '../cards/NftCard'

const NftAssets = ({ nfts }) => {
  return (
    <View style={styles.assetsGrid}>
      {nfts?.map((nft, index) => (
        <NftCard nft={nft} key={index}/>
      ))}
    </View>
  )
}

export default NftAssets

const styles = StyleSheet.create({
  assetsGrid: {
    gap: 20,
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 20,
  },
});
